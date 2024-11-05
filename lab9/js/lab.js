/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work. 
   Lab 9: Libaries and jQuery

   Author: Precious Garcia 
   Date: Nov. 2024
*/
// add button to challenge section

// Ensure that the script runs only after the document is fully loaded
$(document).ready(function() {
  // Add buttons to each section

  // Add button to the "challenge" section
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");

  // Add button to the "problems" section
  $("#problems").append("<button id='button-problems'>Make Special</button>");

  // Add button to the "results" section
  $("#results").append("<button id='button-results'>Make Special</button>");

  // Add a click listener to the "challenge" button
  $("#button-challenge").click(function() {
      // Toggle the "special" class in the challenge section
      $("#challenge").toggleClass("special");
  });

  // Add a click listener to the "problems" button
  $("#button-problems").click(function() {
      // Toggle the "special" class in the problems section
      $("#problems").toggleClass("special");
  });

  // Add a click listener to the "results" button
  $("#button-results").click(function() {
      // Toggle the "special" class in the results section
      $("#results").toggleClass("special");
  });
});


