document.getElementById("take-one").addEventListener ("click" , takeOne);

/**
 *  Gives player 1 card and Computer another
 */
function takeOne() {
    let card = Math.floor(Math.random()*6);
    console.log(card);
    let firstCard = document.getElementById("your-hand");
    firstCard.setAttribute('src', `/assets/images/${card}.png`);
};
