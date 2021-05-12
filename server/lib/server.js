import fs from 'fs';
import https from 'https';
import path from 'path';

const PORT = process.env.PORT || 9007;
const dirname = path.resolve();

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = '';

  if (typeof PORT === 'string') {
    bind = `Pipe ${PORT}`;
  }

  if (typeof PORT === 'number') {
    bind = `Port ${PORT}`;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
};

const createServerAndListen = async (app) => {
  const server = https.createServer(
    {
      key: fs.readFileSync(
        path.resolve(dirname, './server', 'certificates', 'example.com+5-key.pem'),
      ),
      cert: fs.readFileSync(path.resolve(dirname, './server', 'certificates', 'example.com+5.pem')),
      passphrase: 'I am here',
    },
    app,
  );

  server.listen(PORT);
  server.on('error', onError);
};

export default createServerAndListen;
