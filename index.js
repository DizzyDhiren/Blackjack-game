let player = {
    name: "Dhiren", 
    chips: 145
}
let cardsArray = [];
let sum = 0;
let hasBlackJack = false;
let userAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomCard =  Math.floor(Math.random() * 13 ) + 1;
    if (randomCard === 1){
        return  11;
    } else if (randomCard > 10){
        return  10;
    } else {
        return randomCard;
    } console.log(randomCard);
    
}

function startgame(){
    userAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArray = [firstCard, secondCard];
    sum = firstCard + secondCard;
    console.log(userAlive);
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
    if (userAlive == true && hasBlackJack == false){
    let card = getRandomCard();
    sum += card;
    cardsArray.push(card);
    console.log(cardsArray);
    renderGame();
    }
}

