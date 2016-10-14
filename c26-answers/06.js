var numbers = process.argv.slice(2);
var min = Math.min(...numbers);
// The same with an old friend
// var min = Math.min.apply(this, numbers);

console.log(`The minimum of [${numbers}] is ${min}`);
