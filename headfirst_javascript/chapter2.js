//battleship game

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;
// let hits = 0;
// let guess;
// let guesses = 0;
// let isSunk = false; //need to set to true when the ship is sunk

// while (isSunk === false) {
//     guess = prompt("Ready , Aim , Fire! (Enter a  number between 0 and 6)"); //prompt function
//     if (guess < 0 || guess > 6) {
//         alert("Please enter a valid number");
//     } else {
//         guesses = guesses + 1;
//         // if (guess === location1) {
//         //     hits = hits + 1;
//         // } else if (guess === location2) {
//         //     hits = hits + 1;
//         // } else if (guess === location3) {
//         //     hits = hits + 1;
//         // }
//         if (guess === location1 || guess === location2 || guess === location3) {
//             alert("Hit!!");
//             //we've combined everything to a single line
//             hits = hits + 1;
//             if (hits === 3) {
//                 isSunk = true;
//                 alert("You have sunk the ship");
//             } else {
//                 alert("Miss!");
//             }
//         }
//     }
// }
// let stats =
//     "The numeber of guesses is " +
//     guesses +
//     " ,to sink the battleship , and your hit score is" +
//     guesses / 3;
// alert(stats);

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;

let randomLoc = Math.floor(Math.random * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let hits = 0;
let guess;
let guesses = 0;
let isSunk = false; //need to set to true when the ship is sunk
while (isSunk === false) {
    guess = prompt("ready , aim , fire! Enter a number between 0 and 6");
    if (guess < 0 || guess > 6) {
        alert("please enter a valid number!");
    } else {
        guesses = guesses + 1;
        if (guess === location1 || guess === location2 || guess === location3) {
            hits = hits + 1;
            alert("HIT!");
        } else {
            alert("Miss!");
        }
        if (hits === 3) {
            isSunk = true;
            alert("You've sunk the ship!!");
        }
    }
}
let stats =
    "The numeber of guesses is " +
    guesses +
    " ,to sink the battleship , and your hit score is" +
    guesses / 3;
alert(stats);

// if (isStock === true) {
//     if (onSale === true) {
//         alert("Its a bargain!!");
//     }
// }
// //this can be written as
// if (isStock === true || onSale === true) {
//     alert("Its a bargain!!");
// }
if ((inStock === true && onSale === true) || price < 60) {
    alert("go buy!!");
}
