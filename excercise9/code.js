const http = require('http');
const bl = require('bl');

let counter = 0;
const list = [];
function printlist() {
  list.forEach(val => console.log(val));
}
function getHttp(urlNo) {
  http.get(process.argv[urlNo + 1], (response) => {
    // console.log(process.argv[urlNo + 1]);
    response.pipe(bl((error, data) => {
      if (error) {
        console.error(error);
        return;
      }

      list[urlNo - 1] = data.toString();
      counter += 1;
      if (counter === 3) {
        printlist();
      }
    }));
  });
}
getHttp(1);
getHttp(3);
getHttp(2);
module.exports.printlist = printlist;
