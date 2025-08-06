const fibonacci = function(a) {
    if (a < 0) return "OOPS"
    a = Number(a)
    switch (a) {
        case 0:
            return 0
        case 1:
            return 1
        default:
        let values = [1,1]
        for(i = 1;i<a-1;i++) {
            values.push(0+values[i-1]+values[i])
            console.log(values)
        }
        
        return values[a-1]
        
    }
};

// Do not edit below this line
module.exports = fibonacci;
