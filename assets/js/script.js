document.getElementById("take-one").addEventListener ("click" , takeOne);

let playerCards = [];
let computerCards = [];
let usedCards = [];
let computerValue = 0;
let playerValue = 0;

/**
 *  Gives player 1 card and stores it into an array
 */
function takeOne() {

    let card = Math.floor(Math.random() * 52);
    let playerHandDiv = document.getElementById("player-hand-div");

    if (usedCards.includes(card)) {
        takeOne();
    } else {
        let firstCard = document.createElement("img");
        playerHandDiv.appendChild(firstCard);
        firstCard.setAttribute("class" , "player-hand");
        firstCard.setAttribute('src', `assets/images/${card}.png`);
    }
    
    usedCards.push(card);
    playerCards.push(card);

    computerTakesOne();
    countPlayerCards();
}

/**
 * Gives a card to computer and stores its value into an array
 */
 function computerTakesOne() {
    let card = Math.floor(Math.random()*52);
    let computerHandDiv = document.getElementById("computer-hand-div");

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
        }
    } else if (computerValue > 17) {
        window.computerTakesOne = null;
    }

    countComputerCards();
}


/**
 * Counts the cards in the player's hand
 */
 function countPlayerCards() {

    playerValue = 0;
    playerCards.sort();

    for (let i = 0; i < playerCards.length; i++) {
        if (playerCards[i] <= 31) {
            playerValue = playerValue + Math.ceil(playerCards[i] / 4 + 1.1);
        } else if (playerCards[i] >= 48) {
            if ((playerValue + 11) < 30) {
                playerValue = playerValue + 11;
            } else if ((playerValue + 11) > 30){
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

      let losingDiv = document.getElementById("losing-div");
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
        } else if (computerCards[i] >= 48) {
            if ((computerValue + 11) < 21) {
                computerValue = computerValue + 11;
            } else if ((computerValue + 11) > 21){
                computerValue = computerValue + 1;
            }
        } else if (32 <= computerCards[i] <= 47) {
            computerValue = computerValue + 10;
        }
    }
}
