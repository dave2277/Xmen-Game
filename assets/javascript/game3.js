// A $( document ).ready() block.
$( document ).ready(function() {
$(".characters").bind('click', function()  {
	doStuff();
})

function doStuff() {
	$("#arena").html("Attacker")
        $(this).appendTo( $(".attacker") );
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
        $("#choose").hide();
        opponent(event);
}

function opponent(event) {
	var enemy = $(".character").not(this)
        $(enemy).appendTo( $("#opponents") );
        $(enemy).removeClass("character");
        $(enemy).addClass("adversary");
}

});