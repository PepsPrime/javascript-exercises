const sumAll = function(min,max) {
    let sum = 0;
    if (max < 0 || min < 0) {
        return 'ERROR'
    }
    if (!Number.isInteger(max)|| !Number.isInteger(min)) return "ERROR"
    if (max < min) {
        let temp = max;
        max = min;
        min = temp;
    }
    for(let i = min; i <=max;i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
