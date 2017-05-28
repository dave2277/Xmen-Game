//Create objects for characters




// A $( document ).ready() block.
$( document ).ready(function() {

//When you click an item with the character class
$(".character").on("click", function() {

//Change the text of arena to "Attacker"
        $("#arena").html("Attacker")

//Move the character icon to the attack position
        $(this).appendTo( $(".attacker") );

//Create a variable for items with the character class that were not clicked
        var enemy = $(".character").not(this)

//Move unclicked items to the opponents div
        $(enemy).appendTo( $("#opponents") );

//Remove the character class from the unclicked items
        $(enemy).removeClass("character");

//Add the advesary class to the unclicked items
        $(enemy).addClass("adversary");

//Hide the choose your character text
        $("#choose").hide();

//Turn off event handlers
        if ($(enemy).hasClass("adversary")) {
            $(enemy).off();
        }

//When you click one of the opponents
        $(".adversary").on("click", function() {

//Move the opponent to the defender section
        $(this).appendTo( $(".defender") );

//Hide the rest of the images
        $(".adversary").not(this).hide();

//Hide Choose Your Opponent text
        $("#fight").hide();
      });
      });


});