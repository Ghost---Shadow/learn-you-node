const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]) || 8080;
const filePath = process.argv[3] || './test/test3.txt';

let server;
function startServer() {
  server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  }).on('error', err => console.log(err));
  server.listen(port);
}
function stopServer() {
  server.close(() => {
    server.unref();
  });
}
startServer();
module.exports.startServer = startServer;
module.exports.stopServer = stopServer;
module.exports.server = server;
module.exports.port = port;
