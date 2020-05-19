$(function(){
    $("#panel1").fadeOut(1000).delay(1000).fadeIn(300);
    $("button#blue").click(function(){
        $("body").removeClass();
        $("body").addClass("blue");
    });
    $("button#green").click(function(){
        $("body").removeClass();
        $("body").addClass("green");
    });
    $("button#red").click(function(){
        $("body").removeClass();
        $("body").addClass("red");

    });
    $("#blanks form").submit(function(event) {
        var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

        blanks.forEach(function(blank) {
          var userInput = $("input#" + blank).val();
          $("." + blank).text(userInput);

        $("#story").show();
        event.preventDefault();
    });//using .text rather than append to change inputs instead of adding on them.
});
});