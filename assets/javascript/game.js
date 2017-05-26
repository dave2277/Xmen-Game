
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

//Move character into attack position
$("#gambit").on("click", function() {
        $(this).appendTo( $(".attacker") );
        $("#storm, #wolverine, #cyclops").appendTo( $("#opponents") );
        $("#choose").hide();
      });

$("#storm").on("click", function() {
        $(this).appendTo( $(".attacker") );
        $("#gambit, #wolverine, #cyclops").appendTo( $("#opponents") );
        $("#choose").hide();
      });

$("#wolverine").on("click", function() {
        $(this).appendTo( $(".attacker") );
        $("#gambit, #storm, #cyclops").appendTo( $("#opponents") );
        $("#choose").hide();
      });

$("#cyclops").on("click", function() {
        $(this).appendTo( $(".attacker") );
        $("#gambit, #storm, #wolverine").appendTo( $("#opponents") );
        $("#choose").hide();
      });

//Move character into defender position

$(".opponents #gambit").on("click", function() {
        $(this).appendTo( $(".defender") );
        $(".opponents #storm, .opponents #wolverine, .opponents #cyclops").hide();
        $("#fight").hide();
      });

$(".opponents #storm").on("click", function() {
        $(this).appendTo( $(".defender") );
        $(".opponents #gambit, .opponents #wolverine, .opponents #cyclops").hide();
        $("#fight").hide();
      });

$(".opponents #wolverine").on("click", function() {
        $(this).appendTo( $(".defender") );
        $(".opponents #gambit, .opponents #storm, .opponents #cyclops").hide();
        $("#fight").hide();
      });

$(".opponents #cyclops").on("click", function() {
        $(this).appendTo( $(".defender") );
        $(".opponents #gambit, .opponents #storm, .opponents #wolverine").hide();
        $("#fight").hide();
      });




});