module.exports = function average(...args) {
  return args.reduce((sum, n) => sum + n, 0) / args.length;
};
