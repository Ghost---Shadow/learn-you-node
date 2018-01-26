const fs = require('fs');

function counter(fileName) {
  const fileString = fs.readFileSync(fileName, 'utf8').toString();
  const count = (fileString.match(/\n/g) || []).length;
  return count;
}

module.exports = counter;

console.log(counter(process.argv[2]));
