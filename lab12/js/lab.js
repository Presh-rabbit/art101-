/*
  sortingHat.js
  This script assigns a Hogwarts House (Gryffindor, Ravenclaw, Slytherin, or Hufflepuff) 
  based on the length of the input string.
  It uses a click event listener to get the input from the user, 
  then displays the assigned house in the output.
*/

// Function that assigns a house based on the length of the name
// create sortingHat()
// get length of str
// mod length 4
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
