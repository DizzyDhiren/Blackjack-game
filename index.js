let firstCard = getRandomCard();
let secondCard = getRandomCard();
 let cardsArray = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let userAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
    return Math.floor(Math.random() * 13 ) + 1;
    
}

function startgame(){
    renderGame();
}

function renderGame(){
    //render out firstCard and secondCard
    cardsEl.textContent = "Cards: " ;

    for (let i = 0  ; cardsArray.length > i; i++){
        cardsEl.textContent += cardsArray[i] + " ";
    }

    //render out tall the cards we have

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
    message = "Do you want to draw another card?";

} else if (sum === 21){
    message = "You've got a blackjack!";
    hasBlackJack = true;

} else {
    message = "You bust!";
    userAlive = false;
};
messageEl.textContent = message;
}
//CASH OUT!
console.log(sum);

//draw a new card
function drawNewCard(){
    let card = getRandomCard();
    sum += card;
    cardsArray.push(card);
    console.log(cardsArray);
    renderGame();
}

