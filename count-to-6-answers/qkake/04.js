let userArray = process.argv.slice(2);
let [_i, username, email, , , _l] = userArray;

console.log({username: username, email: email});
