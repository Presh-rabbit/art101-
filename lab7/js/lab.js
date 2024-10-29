// index.js - Lab 7 functions
// Author: Precious Garcia
// Date: October 28

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
//
// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("enter your name:");
  console.log("userName =",userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
//note that I could have done the above linesas as a single line:
// userName.toLower().split("").sort().join("")
return nameSorted;

}

// output 
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>");
