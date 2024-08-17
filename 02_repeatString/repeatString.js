const repeatString = function(string , sum) {
    if ( sum < 0) return "ERROR";
    let repeated = "";
        for(let i =0; i<sum;i++){
          repeated += string
        }
        return repeated
};
// Do not edit below this line
module.exports = repeatString;
