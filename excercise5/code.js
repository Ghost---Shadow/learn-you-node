const fs = require('fs');
const path = require('path');

function ls(dirPath, ext, callback) {
  fs.readdir(dirPath, (err, allFileNames) => {
    if (err) {
      callback(err);
      return;
    }
    const txtFileNames = allFileNames.filter(fileName =>
      path.extname(fileName) === `.${ext}`);
    txtFileNames.map(e => callback(null, e));
  });
}
module.exports = ls;
/*
ls(process.argv[2], process.argv[3], (err, data) => {
  if (!err) { console.log(data); }
}); */
