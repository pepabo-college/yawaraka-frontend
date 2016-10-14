let inputs = process.argv.slice(2);
let result = inputs.map((input) => input.substr(0,1) ).reduce((a, b) => a.concat(b));
console.log(`[${inputs}] becomes "${result}"`);
