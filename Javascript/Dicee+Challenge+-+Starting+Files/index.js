// create players
var player1 = prompt("please give the name of player1 !!!")
var player2 = prompt("please give the name of player2 !!!")
var players = document.querySelectorAll("p")
players[0].innerHTML = player1
players[1].innerHTML = player2

// create random pic for player 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = `./images/dice${randomNumber1}.png`

var leftDiceImage = document.querySelector("img")

leftDiceImage.setAttribute("src",randomDiceImage1)

// create random pic for player 1
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = `./images/dice${randomNumber2}.png`

var rightDiceImage = document.querySelectorAll("img")[1]

rightDiceImage.setAttribute("src",randomDiceImage2)


// decide who wins the game
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1 + " wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 + " wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }