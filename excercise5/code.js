const fs = require('fs');
const path = require('path');

function ls(dirPath, ext, callback) {
  fs.readdir(dirPath, (err, allFileNames) => {
    const txtFileNames = allFileNames.filter(fileName =>
      path.extname(fileName) === `.${ext}`);
    txtFileNames.map(e => callback(e));
  });
}
module.exports = ls;

ls(process.argv[2], process.argv[3], console.log);
