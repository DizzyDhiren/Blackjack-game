let firstCard = 10;
let secondCard = 13;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let userAlive = true;

let message = "";

if (sum <= 20){
    message = "Do you want to draw another card?";

} else if (sum === 21){
    message = "You've got a blackjack!";
    hasBlackJack = true;

} else {
    message = "You bust!";
    userAlive = false;
};

//CASH OUT!
console.log(sum);
console.log(message);
console.log("do you have a blackjack? " + hasBlackJack);
console.log("are you still alive? " + userAlive);