var rollButton = document.querySelector(".button");
var diceImages = document.querySelectorAll(".players .player1 img, .players .player2 img");
var winnerName = document.querySelector(".winner-name");

rollButton.addEventListener("click", function () {
  var player1Roll = Math.floor(Math.random() * 6) + 1;
  var player2Roll = Math.floor(Math.random() * 6) + 1;

  diceImages[0].setAttribute("src", "images/dice" + player1Roll + ".png");
  diceImages[1].setAttribute("src", "images/dice" + player2Roll + ".png");

  if (player1Roll > player2Roll) {
    winnerName.textContent = "🚩 Player 1 🏆";
  } else if (player2Roll > player1Roll) {
    winnerName.textContent = "🚩 Player 2 🏆";
  } else {
    winnerName.textContent = "🤜 Draw 🤛";
  }
});


