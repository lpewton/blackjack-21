document.getElementById("take-one").addEventListener ("click" , takeOne);
document.getElementById("fold").addEventListener ("click" , fold);

let playerCards = [];
let computerCards = [];
let usedCards = [];
let computerValue = 0;
let playerValue = 0;

/**
 *  Gives player 1 card and stores it into an array
 */
function takeOne() {

    let cardNum = Math.floor(Math.random() * 52);
    let playerHandDiv = document.getElementById("player-hand-div");

    playerHandDiv.style.backgroundColor = "#116D31";

    if (usedCards.includes(cardNum)) {
        takeOne();
    } else {
        let card = document.createElement("img");
        playerHandDiv.appendChild(card);
        card.setAttribute("class" , "player-hand");
        card.setAttribute('src', `assets/images/${cardNum}.png`);

        usedCards.push(cardNum);
        playerCards.push(cardNum);

        playerCards.sort();

        if (computerValue < 17) {
        computerTakesOne();
        }

        countPlayerCards();
    }
}

/**
 * Gives a card to computer and stores its value into an array
 */
 function computerTakesOne() {
    let card = Math.floor(Math.random()*52);
    let computerHandDiv = document.getElementById("computer-hand-div");

    computerHandDiv.style.backgroundColor = "#116D31";

    if (computerValue < 17) {
        if (usedCards.includes(card)) {
        computerTakesOne();
        } else {
            let secondCard = document.createElement("img");
            computerHandDiv.appendChild(secondCard);
            secondCard.setAttribute("class" , "computer-hand")
            secondCard.setAttribute('src', `assets/images/reverse.png`);

            usedCards.push(card);
            computerCards.push(card);

            countComputerCards();
        }
    }
}

/**
 * Counts the cards in the player's hand
 */
 function countPlayerCards() {

    playerValue = 0;

    for (let i = 0; i < playerCards.length; i++) {
        if (playerCards[i] <= 31) {
            playerValue = playerValue + Math.ceil(playerCards[i] / 4 + 1.1);
        } else if (playerCards[i] >= 48) {
            if ((playerValue + 11) <= 21) {
                playerValue = playerValue + 11;
            } else if ((playerValue + 11) > 21){
                playerValue = playerValue + 1;
            }
        } else if (32 <= playerCards[i] <= 47) {
            playerValue = playerValue + 10;
        }
    }

    if (playerValue > 21) {
      let takeOne = document.getElementsByTagName('button')[0];
      let fold = document.getElementsByTagName('button')[1];

      takeOne.remove();
      fold.remove();

      let losingDiv = document.getElementById("announcements-div");
      let losingHeading = document.createElement("h1");
      losingHeading.innerHTML = `Oh no! Your score is ${playerValue}... You lost!`;
      losingDiv.appendChild(losingHeading);
        }
    }

 /**
 * Counts the cards in the computer's hand
 */
  function countComputerCards() {

    computerValue = 0;
    computerCards.sort();

    for (let i = 0; i < computerCards.length; i++) {
        if (computerCards[i] <= 31) {
            computerValue = computerValue + Math.ceil(computerCards[i] / 4 + 1.1);
        } else if (computerValue[i] >= 48) {
            if ((computerValue + 11) <= 21) {
                computerValue = computerValue + 11;
            } else if ((computerValue + 11) > 21){
                computerValue = computerValue + 1;
            }
        } else if (32 <= computerCards[i] <= 47) {
            computerValue = computerValue + 10;
        }
    }
  }

  /**
   * Gives out each player's score and determines the winner
   */
function fold() {
    let takeOneButton = document.getElementsByTagName('button')[0];
    let foldButton = document.getElementsByTagName('button')[1];

    takeOneButton.remove();
    foldButton.remove();

    for (let i = 0; i < computerCards.length; i++) {
    let card = document.getElementsByClassName("computer-hand")[i];

    card.setAttribute('src', `assets/images/${computerCards[i]}.png`);
    }

    let computerResult = document.getElementById("computer-value");
    computerResult.innerHTML = `${computerValue}`;

    let playerResult = document.getElementById("player-value");
    playerResult.innerHTML = `${playerValue}`;

    if (computerValue > 21) {
        computerResult.style.color = "red";
        playerResult.style.color = "green";
    } else if (playerValue > computerValue){
        computerResult.style.color = "red";
        playerResult.style.color = "green";
    } else if (playerValue < computerValue) {
        computerResult.style.color = "green";
        playerResult.style.color = "red";
    } else if (playerResult === computerResult) {
        computerResult.style.color = "gray";
        playerResult.style.color = "gray";
    }

    if (computerResult.style.color === "red") {
        let winDiv = document.getElementById("announcements-div");
        let winHeading = document.createElement("h1");
        winHeading.style.color = "black";
        winHeading.innerHTML = `You won!`;
        winDiv.appendChild(winHeading);
    }

    if (computerResult.style.color === "green") {
        let loseDiv = document.getElementById("announcements-div");
        let loseHeading = document.createElement("h1");
        loseHeading.style.color = "red";
        loseHeading.innerHTML = `You lost...`;
        loseDiv.appendChild(loseHeading);
    }

    if (computerResult.style.color === "gray") {
        let drawDiv = document.getElementById("announcements-div");
        let drawHeading = document.createElement("h1");
        drawHeading.style.color = "gray";
        drawHeading.innerHTML = "Draw!"
        drawDiv.appendChild(drawHeading);
    }

}

