module.exports = function makeImportant(val, count = val.length) {
    var add_str = "!".repeat(count);
    return `${val}${add_str}`;
};

