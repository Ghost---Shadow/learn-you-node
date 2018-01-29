const modular = require('./util');

modular(process.argv[2], process.argv[3], (err, data) => {
  data.forEach(fileName => console.log((fileName)));
});
