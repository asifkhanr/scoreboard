let firstCard = 15
let secondCard = 6

let sum = firstCard + secondCard
let hasBlackJack = false;

console.log(sum)

if (sum < 21){
    console.log("Do u want to draw a new card?")
} else if (sum === 21){
    console.log("Woh, you have won! :)")
    // hasBlackJack = true;
} else {
    console.log("You have lost maaannn :(")
}

console.log(hasBlackJack)