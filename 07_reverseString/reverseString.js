const reverseString = function(string) {
    let reversedString = ""
    let arr = string.split("")
    for(let i = arr.length -1 ;i >= 0 ; i--) {
        reversedString += arr[i]
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
