const http = require('http');

function getTest(url, callback) {
  const options = {
    host: url,
  };
  http.get(options, (response) => {
    response.setEncoding('utf8');
    let totalString = '';
    response.on('data', (data) => {
      totalString += data.toString();
    });
    response.on('end', () => {
      callback(totalString.length);
      callback(totalString);
    });
  });// .on('error', console.error);
}

module.exports = getTest;
getTest(process.argv[2], console.log);
