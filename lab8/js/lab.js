// index.js - Lab 8 Anon Fuctions and Callbacks
// Author: Precious Garcia
// Date: October 30

  
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// create a fuction that adds an array by two
function additiontwo(x) {
  return (x + 2);}

function isOdd(x) {
  return (x - 3 == 0);
}
//test the function

console.log("is 2 odd?", isOdd(2));
console.log("is 3 odd?", isOdd(3));

array = [17, 18, 19, 20, 21, 22, 23]
console.log("My array", array);

//test for odd numbers in array
var oddcheckresult = array.map(isOdd);
console.log("test for odd numbers in array", oddcheckresult);

 //test addition be two in array

var result = array.map(isOdd);
//should return to [14, 15, 16, 17, 18, 19, 20]
console.log("Test for odd numbers of the array:", result);

var subtractResult = array.map(function(x){
  return x - 3;
});
//should be returning to [19, 20, 21, 22, 23, 24, 25]
console.log("Test by subtracting of 3", subtractResult);

//test for ddition by 2 in array
var additionResult = array.map(additiontwo);
console.log("Test for addition by 2 of array",additionResult)



