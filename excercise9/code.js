const http = require('http');

let counter = 0;
const lists = ['', '', ''];
function callback(list) {
  list.forEach(val => console.log(val));
}
function getHttp(urlNo, cb) {
  http.get(process.argv[urlNo + 1], (response) => {
    response.on('data', (data) => {
      lists[urlNo - 1] += data.toString();
    });
    response.on('end', () => {
      counter += 1;
      if (counter === 3) {
        cb(lists);
      }
    });
  });
}
getHttp(1, callback);
getHttp(3, callback);
getHttp(2, callback);
module.exports = getHttp;
