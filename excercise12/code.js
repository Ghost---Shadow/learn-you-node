const http = require('http');

const port = Number(process.argv[2]) || 8080;

let server;
function startServer() {
  server = http.createServer((req, res) => {
    req.on('data', (data) => {
      const upperCaseString = data.toString().toUpperCase();
      res.write(upperCaseString);
    });
    req.on('end', () => {
      res.end();
    });
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
