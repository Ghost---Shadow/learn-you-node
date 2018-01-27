const http = require('http');

const port = Number(process.argv[2]) || 8080;

const url = require('url');

function parseTime(query) {
  const slices = query.split(':');
  const timeObj = {
    hour: slices[0].substr(slices[0].length - 2),
    minute: slices[1],
    second: slices[2].substr(0, 2),
  };
  return timeObj;
}

function unixTime() {
  return {
    unixtime: Math.floor(new Date() / 1000),
  };
}

let server;
function startServer() {
  server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const parsedUrl = url.parse(request.url);
    let jObj;
    if (parsedUrl.query.indexOf('parsetime') > -1) {
      jObj = parseTime(parsedUrl.query);
    } else if (parsedUrl.query.indexOf('unixtime') > -1) {
      jObj = unixTime();
    }
    response.write(JSON.stringify(jObj));
    response.end();
  }).on('error', console.error);
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
