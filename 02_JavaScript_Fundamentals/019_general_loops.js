//FOR LOOPS

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// let array = [];
// const myForLoop = () => {
//   for (let i = 0; i <= 10; i++) {
//     array.push(i);
//   }
//   return array;
// };
// console.log(myForLoop());

// //
// for (let j = 0; j <= 10; j++) {
//   console.log(`'number' ${j}`);
// }

//continue statement

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     console.log("I'm awesome");
//     continue;
//   }
//   console.log(`Number ${i}`);
// }

//break

// for (let i = 0; i <= 13; i++) {
//   if (i === 3) {
//     console.log("I'm awesome");
//     continue;
//   } else if (i === 8) {
//     console.log("The loop has broken");
//     break;
//   }
//   console.log(`Number ${i}`);
// }

//WHILE LOOPS

// let i = 8;

// while (i < 12) {
//   console.log(`Number ${i}`);
//   i++;
// }

//do while

// let i = 1;

// do {
//   console.log(`The number is fake ${i}`);
//   i++;
// } while (i < 25);

// let j = 23;

// do {
//   console.log(`${j} is the number!!`);
//   j++;
// } while (j < 13);

//looping through arrays:

// let array = ["cars", "bikes", "trucks", "trains"];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// let array = ["cars", "bikes", "trucks", "trains"];
// array.forEach((array) => {
//   console.log(array);
// });
let newArray = [23, "ewda", true, { j: 4, h: 88 }];
newArray.forEach((newArray) => {
  console.log(newArray);
});
