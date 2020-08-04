//arrays
// let array = [11, 34, 56, 78];
// array[3] = 89;
// console.log(array);

// let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// let hasBubbleGum = [false, false, false, true];
// for (let i = 0; i < hasBubbleGum.length; i++) {
//     for (let j = 0; j < products.length; j++) {
//         if (hasBubbleGum[i]) {
//             console.log(`${products[j]} conatins ${products[j]}`);
//         }
//     }
// }

// var hasBubbleGum = [false, false, false, true];
// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// var i = 0;
// while (i < hasBubbleGum.length) {
//     if (hasBubbleGum[i]) {
//         console.log(products[i] + " contains bubble gum");
//     }
//     i++;
// }
//page 161

let scores = [
    60,
    50,
    60,
    58,
    54,
    54,
    58,
    50,
    52,
    54,
    48,
    69,
    34,
    55,
    51,
    52,
    44,
    51,
    69,
    64,
    66,
    55,
    52,
    61,
    46,
    31,
    57,
    52,
    44,
    18,
    41,
    53,
    55,
    61,
    51,
    44,
];
// let i = 0;
// while (i < scores.length) {

function printAndGetHighScore() {
    let greatest = 0;
    for (let i = 0; i < scores.length; i++) {
        console.log(`Bubble Solution #${i} score = ${scores[i]}`);
        if (scores[i] > greatest) {
            greatest = scores[i];
        }
    }
    return greatest;
}
function getBestSolutions() {
    let bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
        if (printAndGetHighScore() === scores[i]) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
console.log(`The greatest number is ${printAndGetHighScore()}`);
console.log(`The total number of bubble scores = ${scores.length}`);
console.log(`The best solutions are ${getBestSolutions()}`);
