document.getElementById("take-one").addEventListener ("click" , takeOne);

/**
 *  Gives player 1 card and Computer another
 */

let playerCards = [];
let computerCards = [];


function takeOne() {

    let card = Math.floor(Math.random()*12);

    if (playerCards.includes(card) || computerCards.includes(card)) {
        takeOne();
    } else {
        let firstCard = document.getElementById("player-hand");
        firstCard.setAttribute('src', `/assets/images/${card}.png`);
        playerCards.push(card);
        computerTakesOne();
        console.log(playerCards);
    }
}

/**
 * Give a card to computer and store its value to an array
 */
function computerTakesOne() {
    let card = Math.floor(Math.random()*12);

    if (playerCards.includes(card) || computerCards.includes(card)) {
        computerTakesOne();
    } else {
        computerCards.push(card);
        console.log(computerCards);
    }
}
