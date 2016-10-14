var name = process.argv[2];
var lowerd = name.toLowerCase();

var output = `Hello, ${name}!
Your name lowercased is "${lowerd}".`;

console.log(output);
