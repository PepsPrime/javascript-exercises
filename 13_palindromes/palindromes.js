const palindromes = function (strInput) {
    strInput = strInput.toUpperCase();
    let strSize = strInput.length-1;
    for (i=0;i < strSize;i++) {
        if strInput.includes("!")
        console.log(strInput.at(i) + " correspond  à ? : " + strInput.at((-i-1)))
        
        if (strInput.at(i) != strInput.at(i)) return false;            
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
