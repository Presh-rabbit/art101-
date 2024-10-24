// index.js - Lab 6 Arrays and Objects
// Author: Precious Garcia
// Date: October 23

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

// let's get this party started
main();
// define Variables
myTransport = ["bus18", "bus20", "rides from friends", "walk"];

// create a main object or my main ride 
myMainRide= { 
  make: "bus18",
  model: "transit",
  color: "blueyellow",
  year: "2010",
  age: function (){ 
    return 2024 - this.year;
  }
}

// output
document.writeln("kinds of transportation I use: ", myTransport, "<br>");
// this littel trick allows me to write an object in the document
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

