/*
 * Lab: Fetch and Display Comic Data
 * Author: precious 
 * Date: dec 1
 * Description: This script fetches comic data from an API using jQuery's $.ajax() method
 *              and displays the data dynamically on the webpage.
 */

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (replace with the actual API endpoint)
    url: "https://yourapiendpoint.com/",
    // Data to send with the request
    data: { 
        id: 123, // Replace with necessary API parameters
        api_key: "hahaha" // Replace with your actual API key
    },
    // The request type (GET)
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // Callback function for a successful API call
    success: function(comicObj) {
        // Create a new section on the webpage
        const section = $("<section></section>");
        
        // Add a title using comicObj.title
        const title = $("<h1></h1>").text(comicObj.title);
        section.append(title);

        // Create an image tag using comicObj.img and comicObj.alt
        const img = $("<img>")
            .attr("src", comicObj.img)
            .attr("alt", comicObj.alt)
            .attr("title", comicObj.alt);
        section.append(img);

        // Append the section to the body or a specific container
        $("body").append(section);
    },
    // Callback function for a failed API call
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error:", textStatus, errorThrown);
    }
});