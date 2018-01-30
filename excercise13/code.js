
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
    // console.log('query', parsedUrl.query);
    let jObj;
    if (parsedUrl.query) {
      jObj = parseTime(parsedUrl.query);
    } else {
      jObj = unixTime();
    }
    response.end(JSON.stringify(jObj));
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

/*
const http = require('http');
const url = require('url');

function getUnix(prop) {
  const date = new Date(prop.query.iso);
  const milli = date.getTime();
  const result = { unixtime: milli };
  return result;
}
function getISO(prop) {
  const date = new Date(prop.query.iso);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const result = {
    hour: hours,
    minute: minutes,
    second: seconds,
  };
  return result;
}
const server = http.createServer((request, response) => {
  const prop = url.parse(request.url, true);
  console.log(prop);
  // response.writeHead(200, { 'content-type': 'application/json' });
  if (prop.pathname === '/api/unixtime') {
    const res = getUnix(prop);
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(res));
  } else if (prop.pathname === '/api/parsetime') {
    const res = getISO(prop);
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(res));
  } else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(process.argv[2]);
module.exports.getUnix = getUnix;
module.exports.getISO = getISO;
*/
