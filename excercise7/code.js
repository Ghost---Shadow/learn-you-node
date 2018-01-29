/*
const http = require('http');

function getTest(url, callback) {
  const options = {
    host: url,
  };
  http.get(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', callback);
  });
}

module.exports = getTest;
getTest(process.argv[2], console.log);
*/

const http = require('http');

function callbck(response) {
  response.setEncoding('utf8');
  response.on('error', error => console.error(error));
  response.on('data', (data) => {
    console.log(data);
  });
}
function geturl() {
  http.get(process.argv[2], callbck);
}
geturl();
