function add(args) {
  let myArgs = args;
  myArgs[0] = 0;
  myArgs[1] = 0;
  myArgs = myArgs.map(n => Number(n));
  return myArgs.reduce((acc, n) => acc + n, 0);
}

module.exports = add;

console.log(add(process.argv));
