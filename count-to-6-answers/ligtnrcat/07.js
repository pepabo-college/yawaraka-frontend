module.exports = function average(...args ) {
    var result = 0;
    args.forEach(function (value) {
        result += value;
    });
    
    return result/args.length;
};

