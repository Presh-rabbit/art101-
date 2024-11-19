/* 
FizzBuzzBoom Function lab 13
Author: Precious Garcia
Date: Nov. 18 2024

This program loops through numbers 1 to 200 and prints:
- "Fizz!" for multiples of 3
- "Buzz!" for multiples of 5
- "Boom!" for multiples of 7
- Combinations for numbers that are multiples of more than one
The output is displayed in the "output" div on the webpage.
*/

function fizzBuzzBoom() {
    // Initialize an empty string to store the output
    let oneLongString = "";

    // Loop through numbers 1 to 200
    for (let num = 1; num <= 200; num++) {
        // Start with the number
        let str = num + ": ";

        // Check conditions and append appropriate text
        if (num % 3 === 0) str += "Fizz!";
        if (num % 5 === 0) str += "Buzz!";
        if (num % 7 === 0) str += "Boom!";

        // If none of the conditions apply, just add the number
        if (str === num + ": ") str = num;

        // Add the result to the overall output string with a line break
        oneLongString += str + "<br>";
    }

    // Output the final string to the "output" div
    $("#output").html(oneLongString);
}

// Call the function
fizzBuzzBoom();