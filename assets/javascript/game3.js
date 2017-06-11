// A $( document ).ready() block.
$( document ).ready(function() {

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

var counter = 0;
var damage = (healthPoints - attackPower * counter);
var playerDamage = (healthPoints - counterPower);


$("#attack").on("click", function() {
        var counter = $('#attack').val();
        counter++;
        $('#attack').val(counter); 


function damageAttacker() {
    

};

function damagePlayer () {

};


function status () {
    
}

});