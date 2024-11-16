/*
   lab.js 12 - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version by sorting the characters of the string alphabetically.

   Requirements: jQuery must be loaded for this script to work.

   Author: Precious Garcia
   Date: 2024
*/

// Function that assigns a house based on the length of name
// create sortingHat()
// get length of str
// mod length to 4
function sortingHat(str) {
    // return slytherin, gryffindor, ravenclaw, and hufflepuff
const houses = [
        {name: "Slytherin", description: "Ambition/cunningness/heritage & resourcefulness! how nice!"},
        {name: "Gryffindor", description: "Bravery/helping others/ & chivalry! how nice!"},
        {name: "Ravenclaw", description: "Intelligence/knowledge/planning ahead/ & wit! how nice!"},
        {name: "Hufflepuff", description: "Hard work/patience/loyalty/ & fair play! how nice!"}
 ];
 let len = str.length;
 let mod = len % houses.length;

return houses[mod];
}
    var myButton = document.getElementById("button");
    myButton.addEventListener("click", function() {

    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    var newText = "<p>Yay! The sorting hat has sorted you into " + house.name + "</p>" +
                  "<p> Your traits may include: " + house.description + "</p>";
    document.getElementById("output").innerHTML = newText;
});
