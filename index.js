//For image1 random image effect
var randomnumber1 = Math.floor(Math.random() * 6) + 1; // numbers 1-6;
var randomimagesource = "images/" + "dice" + randomnumber1 + ".png"; // images/dice1.png - images/dice2.png
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomimagesource);

// for image2 random image effect
var randomnumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomimage2source = "images/dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomimage2source);

// Declare winner
if(randomnumber1 > randomnumber2){
  document.quertSelector("h1").innerHTML="🤴Player 1 Wins";
}else if(randomnumber2 > randomnumber1){
  document.querySelector("h1").innerHTML="🤴Player 2 Wins";
}else{
  document.querySelector("h1").innerHTML="Draw📍";
}
