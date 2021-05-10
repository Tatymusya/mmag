import fs from 'fs';
import https from 'https';
import path from 'path';
import WebSocket from 'ws';

const dirname = path.resolve();

const createServerAndListen = async (app) => {
  const PORT = process.env.PORT || 9007;
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

  // const wssPort = process.env.WS_PORT || 6969;
  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    console.log(ws);
    /* ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('something'); */
  });

  server.listen(PORT);
};

export default createServerAndListen;
