document.getElementById("take-one").addEventListener ("click" , takeOne);

let playerCards = [];
let computerCards = [];

/**
 *  Gives player 1 card and stores it into an array
 */
function takeOne() {

    let card = Math.floor(Math.random()*51);

    if (playerCards.includes(card) || computerCards.includes(card)) {
        takeOne();
    } else {
        let firstCard = document.getElementById("player-hand");
        firstCard.setAttribute('src', `assets/images/${card}.png`);
        playerCards.push(card);
        computerTakesOne();
    }
}

/**
 * Give a card to computer and store its value into an array
 */
function computerTakesOne() {
    let card = Math.floor(Math.random()*51);

    if (playerCards.includes(card) || computerCards.includes(card)) {
        computerTakesOne();
    } else {
        computerCards.push(card);
    }
}
