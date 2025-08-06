const add = function(a,b) {
  return a+b
	
};

const subtract = function(a,b) {
  return a-b
	
};

const sum = function(arr) {
	return arr.reduce((acc,curr) => acc+curr,0)
};

const multiply = function(arr) {
  return arr.reduce((acc,curr) => acc*curr,1)
};

const power = function(a,b) {
  return Math.pow(a,b)
	
};

const factorial = function(a) {
  let sum = 1;
  if (a==0 || a == 1) { 
    return 1;
  } else if (a==2){
    return 2
  }
  else {
    sum = 2;
	  for(i=3;i<a+1;i++){
      sum*=i
    }
    return sum
}
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
