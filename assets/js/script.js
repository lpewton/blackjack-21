document.getElementById("take-one").addEventListener ("click" , takeOne);

let playerCards = [];
let computerCards = [];
let usedCards = [];

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

    if (usedCards.includes(card)) {
        computerTakesOne();
    } else {
        let firstCard = document.createElement("img");
        computerHandDiv.appendChild(firstCard);
        firstCard.setAttribute("class" , "computer-hand")
        firstCard.setAttribute('src', `assets/images/reverse.png`);
        
        usedCards.push(card);
        computerCards.push(card);

        if (playerCards < 21) {
            countComputerCards();
        }
    }
}

/**
 * Counts the cards in each hand
 */
 function countPlayerCards() {

    playerCards.sort();

    let value = 0;

    for (let i = 0; i < playerCards.length; i++) {
        if (playerCards[i] <= 31) {
            value = value + Math.ceil(playerCards[i] / 4 + 1.1);
        } else if (playerCards[i] >= 48) {
            if ((value + 11) < 30) {
                value = value + 11;
            } else if ((value + 11) > 30){
                value = value + 1;
            }
        } else if (32 <= playerCards[i] <= 47) {
            value = value + 10;
    }
    }
 }

 function countComputerCards() {

    computerCards.sort();

    let value = 0;

    for (let i = 0; i < computerCards.length; i++) {
        if (computerCards[i] <= 31) {
            value = value + Math.ceil(computerCards[i] / 4 + 1.1);
        } else if (computerCards[i] >= 48) {
            if ((value + 11) < 30) {
                value = value + 11;
            } else if ((value + 11) > 30){
                value = value + 1;
            } 
        } else if (32 <= computerCards[i] <= 47) {
            value = value + 10;
        }
    }
 }