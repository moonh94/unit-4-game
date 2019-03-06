
var wins =0;
var lose = 0;

var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#number-to-guess").text(targetNumber);

var ranCrys1 =  Math.floor(Math.random() * (12 - 1 + 1)) + 1;





//this counter tracks user's total
var counter = 0;
//click events for crystals
$("#crystal1").on("click", function() {
    counter += 10; //will change this value to the random value of crystal
    console.log("score went up by" + counter);
    if(counter === targetNumber) {
        wins++;
        $("#wins").text(wins);
    } else if (counter > targetNumber) {
        lose++;
        $("#losses").text(lose);
    }
   
});

$("#crystal2").on("click", function() {
    alert("you clicked on a crystal!");
    counter += 1;
    console.log("score went up by" + counter);
});

$("#crystal3").on("click", function() {
    alert("you clicked on a crystal!");
    counter += 1;
    console.log("score went up by" + counter);
});

$("#crystal4").on("click", function() {
    alert("you clicked on a crystal!");
    counter += 1;
    console.log("score went up by" + counter);
});