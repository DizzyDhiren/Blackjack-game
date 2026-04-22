let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;


if (sum <= 20){
    console.log("Do you want to draw another card?");
} else if (sum === 21){
    console.log("You've got a blackjack!");
} else {
    console.log("You Bust!!");
};