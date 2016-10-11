var inputs = process.argv.slice(2);
var result = inputs.map(x => x.charAt(0))
        .reduce((dst, cur) => dst += cur, "");

console.log(`[${inputs}] becomes "${result}"`);
