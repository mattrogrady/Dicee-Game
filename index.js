function rollDie() {
  // Left Dice
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomDiceImg1);

  // Right Dice
  var randomNumber2 = Math.ceil(Math.random() * 6);
  var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomDiceImg2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
