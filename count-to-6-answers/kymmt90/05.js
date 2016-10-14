let [, username, email, ...rest] = process.argv.slice(2);
let userInfo = { username: username, email: email };
console.log(userInfo);
