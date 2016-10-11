var numbers = process.argv.slice(2);
var max = Math.max(...numbers);
// The same with an old friend
// var max = Math.max.apply(this, numbers);

console.log(`The minimum of [${numbers}] is ${max}`);
