/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work. 

   Author: Precious Garcia 
   Date: Nov 1 2024
*/


// add button to challenge section
$(".special-sections").append("<button class='make-special'>Make Special</button>");

//Add an Event Listener: Add an click listener to each button. Here's one:

// add a click listener to the challenge button
$(".special-sections button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
});

$(document).ready(function() {
  $('#myButton').click(function() {
    // Your code to execute on click
  });
});
