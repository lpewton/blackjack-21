document.getElementById("take-one").addEventListener ("click" , takeOne);

let playerCards = 0;
let computerCards = 0;
let usedCards = [];

/**
 *  Gives player 1 card and stores it into an array
 */
function takeOne() {

    let card = Math.floor(Math.random()*52);
    let playerHandDiv = document.getElementById("player-hand-div");

    if (usedCards.includes(card)) {
        takeOne();
    } else {
        let firstCard = document.createElement("img");
        playerHandDiv.appendChild(firstCard);
        firstCard.setAttribute("class" , "player-hand");
        firstCard.setAttribute('src', `assets/images/${card}.png`);

        playerCards = playerCards + Math.ceil(card / 4 + 0.1);
        usedCards.push(card);

        computerTakesOne();
        countCards();

        console.log("player: " + playerCards);
    }
}

/**
 * Gives a card to computer and stores its value into an array
 */
function computerTakesOne() {
    let card = Math.floor(Math.random()*52);
    let computerHandDiv = document.getElementById("computer-hand-div");

    if (usedCards.includes(card)) {
        computerTakesOne();
    } else {
        let firstCard = document.createElement("img");
        computerHandDiv.appendChild(firstCard);
        firstCard.setAttribute("id" , "computer-hand")
        firstCard.setAttribute('src', `assets/images/reverse.png`);
        
        computerCards = computerCards + Math.ceil(card / 4 + 0.1);
        usedCards.push(card);

        countCards();

        console.log("computer:" + computerCards);
        console.log("used:" + usedCards);
    }
}

/**
 * Counts the cards in each hand
 */
function countCards(sum1, sum2) {
    if (playerCards > 21) {
        alert("Oh no! You lost!")
    }
}

