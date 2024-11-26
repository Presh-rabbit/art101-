/**
 * Lab 15: Pokémon API Integration
 * Fetches and displays data from the Pokémon API.
 * name: Precious 
 */

$(document).ready(function () {
    // Event listener for button click
    $('#activate').click(function () {
        // Clear previous output
        $('#output').html('<p>Loading...</p>');

        // AJAX call to fetch data
        $.ajax({
            url: "https://pokeapi.co/api/v2/evolution-chain/1/",
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data); // Log data to console for debugging

                // Display fetched data
                let pokemonData = `<p><strong>Base Pokémon:</strong> ${data.chain.species.name}</p>`;
                if (data.chain.evolves_to.length > 0) {
                    pokemonData += `<p><strong>Evolves To:</strong> ${data.chain.evolves_to[0].species.name}</p>`;
                }
                $('#output').html(pokemonData);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error fetching data:", textStatus, errorThrown);
                $('#output').html('<p>Failed to fetch data. Please try again later.</p>');
            }
        });
    });
});