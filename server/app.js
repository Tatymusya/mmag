/* eslint-disable import/extensions */
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack/webpack.dev.config.js';
import createServerAndListen from './lib/server.js';

const corsOptions = {
  origin: 'https://localhost:9007',
};
const dirname = path.resolve();
const compiler = webpack(config);
const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(webpackDevMiddleware(compiler, config.devServer));
app.use(webpackHotMiddleware(compiler));
app.use('/fonts', express.static('../dist/'));

const main = async () => {
  try {
    createServerAndListen(app)
      .then(() => {
        // job.start();
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (e) {
    console.error(e);
  }
};

app.get('*', (req, res) => {
  res.sendFile(path.resolve(dirname, 'dist', 'index.html'));
});

main();
