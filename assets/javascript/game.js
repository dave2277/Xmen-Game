//Create objects for characters
var gambit = {
    name: "Gambit",
    healthPoints: 185,
    attackPower: 7,
    counterPower: 15
}

var storm = {
    name: "Storm",
    healthPoints: 158,
    attackPower: 8,
    counterPower: 25
}

var wolverine = {
    name: "Wolverine",
    healthPoints: 220,
    attackPower: 4,
    counterPower: 17
}

var cyclops = {
    name: "Cyclops",
    healthPoints: 198,
    attackPower: 6,
    counterPower: 13
}


// A $( document ).ready() block.
$( document ).ready(function() {

//When you click an item with the character class
$(".character").on("click", function() {

//Change the text of arena to "Attacker"
        $("#arena").html("Attacker")

//Move the character icon to the attack position
        $(this).appendTo( $(".attacker") );

//Assign the appropriate object to the image you picked
        if (this.id === "gambit") {
            var attacker = gambit;
        }

        if (this.id === "storm") {
           var attacker = storm;
        }

        if (this.id === "wolverine") {
            var attacker = wolverine;
        }

        if (this.id === "cyclops") {
            var attacker = cyclops;
        }

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

//Assign the defender object properties
        if (this.id === "gambit") {
            var defender = gambit;
        }

        if (this.id === "storm") {
           var defender = storm;
        }

        if (this.id === "wolverine") {
            var defender = wolverine;
        }

        if (this.id === "cyclops") {
            var defender = cyclops;
        }

//Hide the rest of the images
        $(".adversary").not(this).hide();

//Hide Choose Your Opponent text
        $("#fight").hide();

//When you click the attack button 
        $("#attack").on("click", function() {

//Count the number of clicks
        var counter = $('#attack').val();
        counter++;
        $('#attack').val(counter);
        console.log(counter);       

//Multiply attack power by number of clicks
        var damage = (attacker.attackPower * counter);

//Function to increase attack power for each click
        var cumulativeDamage = (function ()  
        {
            return function () {
                    return (defender.healthPoints - (damage * (counter - 1)))
                }

        })();


//Counter attack
        var attackerDamage = (attacker.healthPoints - (defender.counterPower * counter));  
        
//Update health for each attack
        var status = "<p>" + attacker.name + " attacks for " + damage + " damage." +
        "<p>" + defender.name + " has " + cumulativeDamage() + " HP. </p>" +
        "<p>" + defender.name + " counter attacks for " + defender.counterPower + " damage." +
        "<p>" + attacker.name + " has " + attackerDamage + " HP. </p>";

        $("#display").html(status);        
         
//Show Game Over if health less than zero
        var over = "<h1> GAME OVER! </h1>" +
        "<p>Press reset to play again </p>"; 


        if (attacker.healthPoints <= 0) {
            $("display").html(over);
        }

//Press a button to play again-- found out how to refresh the page programmatically.


//Select new enemy if enemy is defeated

        var win = "<p> " + defender.name + " has been defeated! </p>" +
        "<p> Choose your next opponent. "

        var leftovers = (defender.healthPoints < 0);

        if (defender.healthPoints <= 0) {
            $("display").html(win);
    

        }



        });
        });
    });
});