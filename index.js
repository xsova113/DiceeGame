function playButtonPressed() {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var leftDice = document.querySelector(".dice .img1");
    leftDice.setAttribute("src", "images/dice" + randomNumber + ".png");

    var rightDice = document.querySelector(".dice .img2");
    rightDice.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    var resultTitle = document.querySelector("h1");

    if (randomNumber > randomNumber2) {
        resultTitle.textContent = "🚩 player 1 wins!"
    } else if (randomNumber2 > randomNumber) {
        resultTitle.innerHTML = "player 2 wins! 🚩"
    } else {
        resultTitle.innerHTML = "Draw!"
    }
}

document.querySelector(".container button").onclick = playButtonPressed;
