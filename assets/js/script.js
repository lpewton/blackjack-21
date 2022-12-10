document.getElementById("rules-button").addEventListener ("click" , showRules);
document.getElementById("take-one").addEventListener ("click" , takeOne);

let playerCards = [];
let computerCards = [];
let usedCards = [];
let computerValue = 0;
let playerValue = 0;

/**
 * Pops rules div up
 */
function showRules() {
    let rulesDiv = document.getElementById("rules-div");
    rulesDiv.style.visibility = "visible";
    let rulesButton = document.getElementById("rules-button");
    rulesButton.innerHTML = "Back to game";
    document.getElementById("rules-button").addEventListener ("click" , backToGame);
}

/**
 * Makes the rules division invisible
 */
function backToGame() {
    let rulesDiv = document.getElementById("rules-div");
    rulesDiv.style.visibility = "hidden";
    let rulesButton = document.getElementById("rules-button");
    rulesButton.innerHTML = "How to play?";
    document.getElementById("rules-button").removeEventListener ("click" , backToGame);
    document.getElementById("rules-button").addEventListener ("click" , showRules);
}

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

        document.getElementById("fold").addEventListener ("click" , fold);

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
            secondCard.setAttribute("class" , "computer-hand");
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
      let takeOne = document.getElementById('take-one');
      let fold = document.getElementById('fold');

      takeOne.remove();
      fold.remove();

      let announcementDiv = document.getElementById("announcements-div");
      let announcement = document.createElement("h1");
      announcement.innerHTML = `Oh no! Your score is ${playerValue}... You lost!`;
      announcement.style.color = "red";
      announcement.style.padding = "5px";
      announcementDiv.appendChild(announcement);

      let restartButton = document.createElement("button");
      announcement.appendChild(restartButton);
      restartButton.setAttribute("id" , "restart-button");
      restartButton.innerHTML = 'Retry <i class="fa-solid fa-arrows-spin"></i>'
      
      document.getElementById("restart-button").addEventListener ("click" , restartGame);
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
    let takeOneButton = document.getElementById('take-one');
    let foldButton = document.getElementById('fold');

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
    } else if (playerValue === computerValue) {
        computerResult.style.color = "gray";
        playerResult.style.color = "gray";
    }

    let announcementDiv = document.getElementById("announcements-div");
    let announcement = document.createElement("h1");

    if (computerResult.style.color === "red") {
        announcement.style.color = "green";
        announcement.innerHTML = `You won!`;
        announcement.style.padding = "5px";
        announcementDiv.appendChild(announcement);
    }

    if (computerResult.style.color === "green") {
        announcement.style.color = "red";
        announcement.innerHTML = `You lost...`;
        announcement.style.padding = "5px";
        announcementDiv.appendChild(announcement);
    }

    if (computerResult.style.color === "gray") {
        announcement.style.color = "gray";
        announcement.innerHTML = `Draw!`;
        announcement.style.padding = "5px";
        announcementDiv.appendChild(announcement);
    }
    
    let restartButton = document.createElement("button");
    announcement.appendChild(restartButton);
    restartButton.setAttribute("id" , "restart-button");
    restartButton.innerHTML = 'Retry <i class="fa-solid fa-arrows-spin"></i>'

    document.getElementById("restart-button").addEventListener ("click" , restartGame);
}

/**
 * Resets all values and restarts game
 */
function restartGame() {
    window.location.reload()
}
