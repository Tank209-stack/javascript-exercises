const removeFromArray = function(array , ...arg) {
    let newArr = [];
    array.forEach(element => {
        if (!arg.includes(element)){
            newArr.push(element)
        }
    });
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
