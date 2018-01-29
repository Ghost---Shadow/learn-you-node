const ls = require('../excercise5/code');

ls(process.argv[2], process.argv[3], (err, data) => {
  if (!err) { console.log(data); }
});
