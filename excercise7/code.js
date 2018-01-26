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
