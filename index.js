let firstCard = 10;
let secondCard = 12;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let userAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");



function startgame(){
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

