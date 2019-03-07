
var wins =0;
var lose = 0;


//creating a target number
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
    $("#number-to-guess").text(targetNumber);


var reset = function() {
    $("#number-to-guess").empty();
    
   
}

//giving crystals a random number
var numberOptions = [Math.floor(Math.random() * (12)), Math.floor(Math.random() * (12)), Math.floor(Math.random() * (12)), Math.floor(Math.random() * (12))];
var increment = numberOptions[Math.round(Math.random())];


for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjkn0OaLDc9w9qlVH5FRNgevIXPC71hJFIAJ-OOY5b_hDtn3u");
    imageCrystal.attr("data-crystalValue", numberOptions[i]);
    $("#crystals").append(imageCrystal);

    //used the following code to insert 4 diff pics, with no luck
    // var images = [
    //    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjkn0OaLDc9w9qlVH5FRNgevIXPC71hJFIAJ-OOY5b_hDtn3u",
    //    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSiIVbVtbgh7sYS3UYqF2dvEmWOiDw0K77TB7-KccK9c0qBhc.jpg",
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrcKUnWC-7mDzJmH6kkoqatK5CfvvE04qVd33IoJZ3aJBLeBpgA",
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWR7WP7etKttEFNOu1bMApQJxZd9CyzzBnPR9emUDeYg2I0Kav",
    // ]
    // var imageCrystal = $("<img>");
    // imageCrystal.addClass("crystal-image");
    // imageCrystal.attr("data-crystalValue", numberOptions[i]);
    // imageCrystal.html(images);

$("#crystals").append(imageCrystal);
};



//this counter tracks users total
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
        reset(); 
        targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#number-to-guess").text(targetNumber);
    
    } else if (counter > targetNumber) {
        lose++;
        $("#losses").text(lose);
        counter=0;
        reset();
        targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#number-to-guess").text(targetNumber);   
        
    };
   
});

