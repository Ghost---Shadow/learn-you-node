const net = require('net');

const date = new Date();

const port = Number(process.argv[2]) || 8080;

function getDateTime() {
  const tzoffset = date.getTimezoneOffset() * 60000;
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
  return `${localISOTime // '2012-11-04T14:51:06.157Z'
    .replace(/T/, ' ')
    .substr(0, 16)}\n`;
}

let server;
function startServer() {
  server = net.createServer((socket) => {
    socket.end(getDateTime());
  });
  server.listen(port);
}
function stopServer() {
  server.close(() => {
    server.unref(); // allows the program to exit
  });
}
startServer();
module.exports.startServer = startServer;
module.exports.stopServer = stopServer;
module.exports.server = server;
module.exports.port = port;
