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
    attackPower: 4,
    counterPower: 17
}

var cyclops = {
    name: "Cyclops",
    healthPoints: 198,
    attackPower: 6,
    counterPower: 13
}

$( document ).ready(function() {


    $(".character").on("click", function() {
        $("#arena").html("Attacker")
        $(this).appendTo( $(".attacker") );
        if (this.id === "gambit") {
            attacker = gambit;
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

    enemy = $(".character").not(this)
    $(enemy).appendTo( $("#opponents") );
    $(enemy).removeClass("character");
    $(enemy).addClass("adversary");
    $("#choose").hide();
    if ($(enemy).hasClass("adversary")) {
        $(enemy).off();
    }

    $(".adversary").on("click", function() {
        $(this).appendTo( $(".defender") );
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
        $(".adversary").off();

    $("#attack").on("click", function() {
        var counter = $('#attack').val();
        counter++;
        $('#attack').val(counter); 
        
        var damage = (attacker.attackPower * counter);
           
        var cumulativeDamage = function () {
            let result = (defender.healthPoints - (damage * counter))
            defender.healthPoints = result;
            return result;   
        };
        var newDamage = cumulativeDamage();

        var assWhip = function () {
            let result = (attacker.healthPoints - defender.counterPower)
            attacker.healthPoints = result;
            return result;
        };
        var playerDamage = assWhip();

        var over = "<h1> GAME OVER! </h1>" +
        "<p>Your character has been defeated.</p>";
        "<p>Press reset to play again. </p>";
        //Create a reset button to reset the page.


        var status = "<p>" + attacker.name + " attacks for " + damage + " damage." +
        "<p>" + defender.name + " has " + newDamage + " HP. </p>" +
        "<p>" + defender.name + " counter attacks for " + defender.counterPower + " damage." +
        "<p>" + attacker.name + " has " + playerDamage + " HP. </p>";

        var win = "<p> " + defender.name + " has been defeated! </p>" +
        "<p> Choose your next opponent. "

        $("#display").html(status); 

        if (defender.healthPoints <= 0) {
            $("#display").html(win);
            $(".defender").empty();
            $(".adversary").on("click", function() {
            $(this).appendTo( $(".defender") );
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
                $(".adversary").off();
    
        if (attacker.healthPoints <= 0) {
            $("#display").html(over);
            }
        });
    };
});
});
});
