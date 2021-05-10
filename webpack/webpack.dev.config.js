import webpack from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from '../webpack/webpack.common.config.js';

const devConfig = merge(commonConfig, {
  devtool: 'eval',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: '/',
    writeToDisk: true,
    stats: {
      colors: true,
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

export default devConfig;
