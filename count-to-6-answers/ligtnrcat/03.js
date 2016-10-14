var input = process.argv.slice(2);
var output = input.map( x => x[0] ).reduce((x,y) => x + y );
console.log(`[${input}] becomes "${output}"`);

