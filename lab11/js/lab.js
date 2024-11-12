/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version by sorting the characters of the string alphabetically.

   Requirements: jQuery must be loaded for this script to work.

   Author: Precious Garcia
   Date: 2024
*/

// Function to sort the characters of a string in alphabetical order
function sortString(inputString) {
    // Convert the string to an array, sort it, then join it back into a string
    return inputString.split('').sort().join('');
  }
  
  // Click listener for button
  $("#submit").click(function() {
    // Get value of input field
    const userName = $("#user-name").val();
    
    // now we Sort the user's name
    const userNameSorted = sortString(userName);
    
    // Append a new div to the output div with the sorted name
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });