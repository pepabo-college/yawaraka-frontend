module.exports = function makeImportant(str, num=str.length) {
 let exclamation = "!".repeat(num);
 return `${str}${exclamation}`;
};
