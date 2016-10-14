let args = process.argv.slice(2);
let min  = Math.min(...args);
console.log(`The minimum of [${args}] is ${min}`);
