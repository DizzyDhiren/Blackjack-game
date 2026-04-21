let firstCard = 10;
let secondCard = 12;

let sum = firstCard + secondCard;


if (sum < 21){
    console.log("Do you want to draw another card?");
} else if (sum === 21){
    console.log("You've got a blackjack!");
} else {
    console.log("You Bust!!");
};