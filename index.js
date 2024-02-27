//DICE 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//DICE 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomDiceImage = "dice" + randomNumber2 + ".png";

randomImageSource = "images/" + randomDiceImage;

image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);


//RESULTS
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML = "DRAW";
}