var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0]).reduce((prev, s) => prev.concat(s));
console.log(`[${inputs}] becomes "${result}"`);
