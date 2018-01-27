const fs = require('fs');

function counter(fileName, callBack) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      callBack(0);
      return;
    }
    const fileString = data.toString();
    const count = (fileString.match(/\n/g) || []).length;
    callBack(count);
  });
}

module.exports = counter;

counter(process.argv[2], console.log);
