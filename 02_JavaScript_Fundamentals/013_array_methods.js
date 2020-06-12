let array = [91, 43, 32, 19, 1, 2, 4, 4, 6, 5, 45, 6];
let array2 = new Array(23, 43, 4, 5, 67, 2);
// console.log(Array);
let Array3 = ["armaan", "arjun", "akhil", "don"];
let mixed = [
  2,
  3,
  4,
  true,
  "awesome",
  new Date(),
  { a: 1, b: 3 },
  [2, 4, 5, 6],
];

val = array.length;
// val = array2.isArray(array);
val = Array3[3];
Array3[2] = 100;
mixed[2] = "Naamra";
mixed[5] = [[1, 2, 3, 4, 5]];

//Array mutations

// console.log(Array3);
// console.log(mixed);

//pop
Array3.push(103);

//unshift
Array3.unshift(10003);
//pop
Array3.pop();
//shift
Array3.shift();

// console.log(Array3);

// console.log(val);
//concatinante

val = Array3.concat(mixed);
val = val.length;

// val = array.sort();
// val = array.sort(function (x, y) {
//   return x - y;
// });
// val = array.sort(function (x, y) {
//   return y - x;
// });

//to find a number greater than a number in an array

let newArray = [23, 34, 12, 2, 43, 78, 91];
const numberGreaterthan50 = (num) => {
  return num > 50;
};

val = newArray.find(numberGreaterthan50);

console.log(val);
