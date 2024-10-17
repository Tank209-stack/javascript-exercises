const add = function(a, b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((accumulator , currentValue)=> accumulator + currentValue , 0)
};

const multiply = function(arr ) { 
  return arr.reduce((iniVal , currVal)=> iniVal * currVal ,1)
};

const power = function(value , power) {
	 return value ** power
};

const factorial = function(num) {
    if( num < 0 ){
        return "please write correct code"
    }
   else if (num === 0 ){
        return 1
    }
     let result =1;
     for(let i = 1; i <=num ; i++){
         result *= i;
     }
     return result

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
