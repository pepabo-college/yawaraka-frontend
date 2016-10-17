function average(...args){
  var sum = 0;
  args.forEach(function(value) {
    sum += value;
  });

  return sum / args.length;
};

module.exports = average;
