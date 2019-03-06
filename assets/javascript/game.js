
var wins =0;
var lose = 0;

//creating a target number
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#number-to-guess").text(targetNumber);

//giving crystals a random number
var numberOptions = [Math.floor(Math.random() * (12)), Math.floor(Math.random() * (12)), Math.floor(Math.random() * (12)), Math.floor(Math.random() * (12))];
var increment = numberOptions[Math.round(Math.random())];

// var randomValue1 = Math.floor(Math.random() * (11)) + 1;
// var randomValue2 = Math.floor(Math.random() * (11)) + 1;
// var randomValue3 = Math.floor(Math.random() * (11)) + 1;
// var randomValue4 = Math.floor(Math.random() * (12)) + 1;


for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWR7WP7etKttEFNOu1bMApQJxZd9CyzzBnPR9emUDeYg2I0Kav");
    imageCrystal.attr("data-crystalValue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}


//this counter tracks user's total
var counter = 0;

//click events for crystals
$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue; 
    $("#current").text(counter);
    if(counter === targetNumber) {
        wins++;
        $("#wins").text(wins);
        counter=0;
    
    } else if (counter > targetNumber) {
        lose++;
        $("#losses").text(lose);
        counter=0;
        
        
    };
   
});

