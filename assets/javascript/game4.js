//Create all the character objects
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
    attackPower: 5,
    counterPower: 17
}

var cyclops = {
    name: "Cyclops",
    healthPoints: 198,
    attackPower: 6,
    counterPower: 13
}

var attacker; //For the attacker div
var enemy;      //For moving opponents to the correct div on first click
var defender;   //For the character div that gets moved to the defender location 
var yourFighter; //For the id of the div when you choose your character
var fighter; //For taking on the object properties of the xman you picked
var rival; //For taking on the object properties of the defender
var counter; //For counting the number of times the attack button is clicked.
var damage; //Calculates the attack power of the fighter for each attack
var roundOne = true; //For changing fight behaviors in the first round
var roundTwo = false; //For chaning fight behaviors in the second round
var roundThree = false;// For changing fight behaviors in the third round
var roundTwoDefender; //For the id of the div when you choose your second defender
var newDamage; //For presenting damage results
var playerDamage; //For presenting damage received results


$(document).ready(function() {

//Hide the choose your opponent text
    $("#fight").hide();

//User chooses character by clicking
    $(".character").on("click", function() {

//Assign the variable attacker to the button the user clicked
        attacker = $(this);
        
//Assign the variable yourFighter to the id of the div for object assignment        
        yourFighter = (this.id);
        
//Declare anyone who is not your attacker an enemy
        enemy = $(".character").not(this);

//Show the choose your opponent text
        $("#fight").show();

//Turn off the event listener so only one attacker can be selected
        $(".character").off();

//Run the choose attacker function
        chooseAttacker();
    });

function chooseAttacker() {
       
//Move the attacker icon to the attacker div  
    $(attacker).appendTo( $(".attacker") ).fadeIn( "slow" );

//Assign the appropriate object to the fighter you have chosen
        if (yourFighter === "gambit") {
            fighter = gambit;
        }
        if (yourFighter === "storm") {
           fighter = storm;
        }
        if (yourFighter === "wolverine") {
            fighter = wolverine;
        }
        if (yourFighter === "cyclops") {
            fighter = cyclops;
        }

//Move all the enemies into the opponents div
        $(enemy).appendTo( $(".opponents") );

//Remove the default class so we can listen to events for a new class
        $(enemy).removeClass("character");

//Add the new class we will listen for on the next click event
        $(enemy).addClass("adversary");
        
//Hide the Choose Your Character text
        $("#choose").hide();
    };

//Handle click events for our new class
    $(".opponents").on("click", ".adversary", function() {
        
//Assign the defender variable to what was clicked
        defender = $(this);

//Assign the first defender to the id of the div for object assignment
        defenderName = (this.id);

//Declare anyone you did not pick as the nextDefender
        nextDefender = $(".adversary").not(this);

//Turn off the event listener so only one defender is allowed
        $(".opponents").off();

//Run the choose Defender function
        chooseDefender();
        });

function chooseDefender() {

//Move the defender to the appropriate div
    $(defender).appendTo( $(".defender") ).fadeIn( "slow" );
  
//Assign object to rival    
        if (defenderName === "gambit") {
            rival = gambit;
        }

        if (defenderName === "storm") {
            rival = storm;
        }

        if (defenderName === "wolverine") {
            rival = wolverine;
        }

        if (defenderName === "cyclops") {
            rival = cyclops;
        }

//Use conditional logic to remove and add classes depending on which round we're in

        if (roundOne) {

        $(nextDefender).removeClass("adversary");

        $(nextDefender).addClass("newOpponent");

        } else if (roundTwo) {

        $(nextDefender).removeClass("newOpponent");

        $(nextDefender).addClass("lastOpponent");

        }

        attackButton();
    };

//Keep track of the number of clicks when clicking attack

function attackButton() {

        $("#attack").on("click", function() {
        counter = $('#attack').val();
        counter++;
        $('#attack').val(counter);

//Call the fight function
        fight();
        });

    };

function fight() {

//Handle fight calculations

    damage = (fighter.attackPower * counter);

    if (roundOne) {

        var cumulativeDamage = function() {
            let result = (rival.healthPoints - damage)
            rival.healthPoints = result;
            return result;
            };

        newDamage = cumulativeDamage();

        var returnFire = function() {
            while (rival.healthPoints > 0) {let result = (fighter.healthPoints - rival.counterPower)
            fighter.healthPoints = result;
            return result;}     
            };

        playerDamage = returnFire();

        } else if (roundTwo || roundThree) {

       var cumulativeDamage = function() {
            
            damage = (damage - fighter.attackPower)
            let result = (rival.healthPoints - damage)
            rival.healthPoints = result;
            return result;
            };

            newDamage = cumulativeDamage();

       var returnFire = function() {
            while (rival.healthPoints > 0) {let result = (fighter.healthPoints - rival.counterPower)
            fighter.healthPoints = result;
            return result;}
            };

            playerDamage = returnFire();
        }

//Call the headsUp function
        headsUp();
    };


function headsUp() {

//Update the status of damage and health points for characters
    var status = "<p>" + fighter.name + " attacks for " + damage + " damage." +
    "<p>" + rival.name + " has " + rival.healthPoints + " HP. </p>" +
    "<p>" + rival.name + " counter attacks for " + rival.counterPower + " damage." +
    "<p>" + fighter.name + " has " + playerDamage + " HP. </p>";

    $("#display").html(status);

   
//Initiate Game Over Text
    if (playerDamage <= 0) {
    var over = "<h1> GAME OVER! </h1>" + "<p>Your character has been defeated.</p>" +
    "<p>Refresh the page to play again. </p>";
    $("#display").html(over);
    }  

//Call the win function if character is defeated
    if (rival.healthPoints <= 0) {
    win();
        }
    };

//Handle status updates
function win() {

//Turn off the attack button until another defender is selected
    $("#attack").off();

//Slowly fade out the defeated character 
    $(defender).fadeOut( "slow" );
   
//Clear and replace status with win text
    $("#display").empty();

    $("#display").html("<p>" + rival.name + " has been defeated! </p>" + "<p> Choose your next opponent. </p>");

//Send to the appropriate round function depending on which round we're in
        if (roundOne) {

        rndTwo();

        } else if (roundTwo) {

        rndThree();

        } else if (roundThree) {

//Display text indicating all the rivals have been defeated
        $("#display").html("<p>" + fighter.name + " has defeated all enemies!  Congratulations! </p>");
        }
    };

function rndTwo() {

//Change our booleans
    roundOne = false;
    roundTwo = true;

//Listen for next defender click
    $(".newOpponent").on("click", function() {

//Re-assign defender value
        defender = $(this);

        defenderName = (this.id);

        nextDefender = $(".newOpponent").not(this);

//Don't allow multiple defenders
        $(".newOpponent").off();

//Empty the display and choose our next opponent
        $("#display").empty();

        chooseDefender();

        });  
    };

function rndThree() {

//Change our booleans

    roundTwo = false;
    roundThree = true;

//Listen for our last opponent selction
    $(".lastOpponent").on("click", function() {
        defender = $(this);

        defenderName = (this.id);

        $("#display").empty();

        chooseDefender();

        });
    };

});
