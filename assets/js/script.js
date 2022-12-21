document.getElementById("rules-button").addEventListener("click", showRules);
document.getElementById("take-one").addEventListener("click", takeOne);

/* Declare global variables */
let playerCards = [];
let computerCards = [];
let usedCards = [];
let computerValue = 0;
let playerValue = 0;


/**
 * Pops rules div up
 */
function showRules() {
  let body = document.body;
  body.style.visibility = "hidden";
  let rulesDiv = document.getElementById("rules-div");
  rulesDiv.style.visibility = "visible";
  let rulesButton = document.getElementById("rules-button");
  rulesButton.style.visibility = "visible";
  rulesButton.innerHTML = "Back to game";
  document.getElementById("rules-button").addEventListener("click", backToGame);
}

/**
 * Makes the rules division invisible
 */
function backToGame() {
  let rulesDiv = document.getElementById("rules-div");
  rulesDiv.style.visibility = "hidden";
  let rulesButton = document.getElementById("rules-button");
  rulesButton.innerHTML = "How to play?";
  document
    .getElementById("rules-button")
    .removeEventListener("click", backToGame);
  document.getElementById("rules-button").addEventListener("click", showRules);

  let body = document.body;
  body.style.visibility = "visible";
}

/**
 *  Gives player 1 card and stores it into an array
 */
function takeOne() {
  let cardNum = Math.floor(Math.random() * 52);

  if (usedCards.includes(cardNum)) {
    takeOne();
  } else {
    let card = document.createElement("img");
    let handDiv = document.getElementById("player-hand-div");

    handDiv.appendChild(card);

    let numberOfCards = playerCards.length;
    let shift = numberOfCards * 50;
    card.style.right = `${shift}px`; //Gets cards stocked on top of each other by moving each of them 50px to the left

    card.setAttribute("src", `assets/images/${cardNum}.png`);

    usedCards.push(cardNum);
    playerCards.push(cardNum);

    playerCards.sort(); //This is so the As are counted last and program can determine wether they will have a value of 1 or 11

    if (computerValue < 17) {
      computerTakesOne();
    } // Get computer to stop taking cards when value reaches 17

    document.getElementById("stick").addEventListener("click", stick);

    countPlayerCards();
  }
}

/**
 * Gives a card to computer and stores its value into an array
 */
function computerTakesOne() {
  let card = Math.floor(Math.random() * 52);
  let computerHandDiv = document.getElementById("computer-hand-div");

  if (computerValue < 17) {
    if (usedCards.includes(card)) {
      computerTakesOne();
    } else {
      let computerCard = document.createElement("img");
      computerHandDiv.appendChild(computerCard);
      computerCard.setAttribute("class", "computer-hand");
      computerCard.setAttribute("src", `assets/images/reverse.png`);

      let numberOfCards = computerCards.length;
      let shift = numberOfCards * 50;
      computerCard.style.right = `${shift}px`; //Gets cards stocked on top of each other by moving each of them 50px to the left

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
      if (playerValue + 11 <= 21) {
        playerValue = playerValue + 11;
      } else if (playerValue + 11 > 21) {
        playerValue = playerValue + 1;
      }
    } else if (32 <= playerCards[i] <= 47) {
      playerValue = playerValue + 10;
    }
  }

  if (playerValue > 21) {
    surpassed();
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
      if (computerValue + 11 <= 21) {
        computerValue = computerValue + 11;
      } else if (computerValue + 11 > 21) {
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
function stick() {
  removeButtons();
  showComputerCards();

  let computerResult = document.getElementById("computer-value");
  computerResult.innerHTML = `${computerValue}`;

  let playerResult = document.getElementById("player-value");
  playerResult.innerHTML = `${playerValue}`;

  if (computerValue > 21) {
    playerResult.className = "value-won";
    computerResult.className = "value-lost";
  } else if (playerValue > computerValue) {
    playerResult.className = "value-won";
    computerResult.className = "value-lost";
  } else if (playerValue < computerValue) {
    playerResult.className = "value-lost";
    computerResult.className = "value-won";
  } else if (playerValue === computerValue) {
    playerResult.className = "value-draw";
    computerResult.className = "value-draw";
  }

  createAnnouncement();

  displayresult ();

}

/**
 * Displays an announcement depending on the player's result
 */
function displayresult() {
  let computerResult = document.getElementById("computer-value");
  let announcementDiv = document.getElementById("announcements-div");
  let announcement = document.getElementById("announcement-heading");
  announcementDiv.style.border = "5px solid gold";

  if (computerResult.className === "value-won") {
    announcement.innerHTML = `You lost...`;
    announcement.setAttribute("class" , "announcement");
  } else if (computerResult.className === "value-draw") {
    announcement.innerHTML = `Draw!`;
    announcement.setAttribute("class" , "announcement");
  } else {
    announcement.innerHTML = `You won!`;
    announcement.setAttribute("class" , "announcement");

  }

  createRestartButton();
}

/**
 * Removes take a card and stick buttons
 */
function removeButtons() {
  let takeOne = document.getElementById("take-one");
  let stick = document.getElementById("stick");

  takeOne.remove();
  stick.remove();
}

/**
 * Creates restart button
 */
function createRestartButton() {
  let announcement = document.getElementById("announcement-heading");
  let restartButton = document.createElement("button");

  announcement.appendChild(restartButton);
  restartButton.setAttribute("id", "restart-button");
  restartButton.innerHTML = 'Retry <i class="fa-solid fa-arrows-spin"></i>';

  document
    .getElementById("restart-button")
    .addEventListener("click", restartGame);
}

/**
 * Removes buttons and stops game
 */
function surpassed() {
  removeButtons();
  createAnnouncement();

  let announcement = document.getElementById("announcement-heading");
  announcement.setAttribute("class" , "announcement-surpassed");
  announcement.innerHTML = `Oh no! Your score is ${playerValue}... You lost!`;

  createRestartButton();
}

/**
 * Creates an announcement div as a placeholders
 */
function createAnnouncement() {
  let announcementDiv = document.getElementById("announcements-div");
  let announcement = document.createElement("h1");
  announcement.setAttribute("id", "announcement-heading");
  announcementDiv.appendChild(announcement);
}

/**
 * Shows the value of computer's card
 */
function showComputerCards() {
  for (let i = 0; i < computerCards.length; i++) {
    let computerCard = document.getElementsByClassName("computer-hand")[i];

    computerCard.setAttribute("src", `assets/images/${computerCards[i]}.png`);
  }
}

/**
 * Resets all values and restarts game
 */
function restartGame() {
  window.location.reload();
}
