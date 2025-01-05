let dice = ["1", "2", "3", "4", "5", "6"]
let img = document.querySelectorAll("img")
let dice1 = dice[Math.floor(Math.random() * dice.length)]
let dice2 = dice[Math.floor(Math.random() * dice.length)]

let player1 = document.getElementsByClassName("dice")[0].firstElementChild
let player2 = document.getElementsByClassName("dice")[1].firstElementChild
// console.log(player1, player2)

console.log(dice1, dice2)

if (dice1 == 1) {
    img[0].src = "./images/dice1.png"
} else if(dice1 == 2) {
    img[0].src = "./images/dice2.png"
} else if(dice1 == 3) {
    img[0].src = "./images/dice3.png"
} else if(dice1 == 4) {
    img[0].src = "./images/dice4.png"
} else if(dice1 == 5) {
    img[0].src = "./images/dice5.png"
} else if(dice1 == 6) {
    img[0].src = "./images/dice6.png"
} else {
    console.log("what the hell?")
}

if (dice2 == 1) {
    img[1].src = "./images/dice1.png"
} else if(dice2 == 2) {
    img[1].src = "./images/dice2.png"
} else if(dice2 == 3) {
    img[1].src = "./images/dice3.png"
} else if(dice2 == 4) {
    img[1].src = "./images/dice4.png"
} else if(dice2 == 5) {
    img[1].src = "./images/dice5.png"
} else if(dice2 == 6) {
    img[1].src = "./images/dice6.png"
} else {
    console.log("what the hell?")
}

if (dice1 > dice2) {
    player1.style.color = '#4ECCA3'
    console.log("Player 1 Wins!")
} else if(dice2 > dice1) {
    player2.style.color = '#4ECCA3'
    console.log("Player 2 Wins!")
} else {
    player2.style.color = '#ccac4e'
    player1.style.color = '#ccac4e'
}

// switch (diceNum) {
//     case 1:
//         img[0].src = "./images/dice1.png"
//         console.log(diceNum)
//         break;

//     case 2:
//         img[0].src = "./images/dice2.png"
//         console.log("your roll was " + diceNum)
//         break;
    
//     case 3:
//         img[0].src = "./images/dice3.png"
//         break;

//     case 4:
//         img[0].src = "./images/dice4.png"
//         break;

//     case 5:
//         img[0].src = "./images/dice5.png" 
//         break;

//     case 6:
//         img[0].setAttribute("src", "./images/dice6.png")
//         img[1].setAttribute("src", "./images/dice6.png")
//         break;
    
//     default:
//         break;
// }


// choosingDice()
