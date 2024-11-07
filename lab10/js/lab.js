/*
   lab.js - 10:javascript for the web

   Requirements: jQuery must be loaded for this script to work. 

   Author: Precious Garcia 
   Date: Nov 6 2024
*/

// Function to generate random Lorem Ipsum text
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }
  
  // Click listener for the button with ID 'make-convo'
  $("#make-convo").click(function(){
    // Get new fake dialogue
    const newText = generateRandomText();
  
    // Append a new div to our output div with the new text
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
  

