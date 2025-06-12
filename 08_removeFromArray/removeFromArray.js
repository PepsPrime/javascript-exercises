const removeFromArray = function(arr,...args) {
    for (let arg of args) {
        while (arr.includes(arg)) {
            let indexToDelete = arr.findIndex((element) => element == arg)
            arr.splice(indexToDelete,1)
            
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
