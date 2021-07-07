var a = 1;
let b = 2;
const c = 3;

// const myFunction = () => {
//   var a = 4;
//   let b = 5;
//   let c = 6;
//   console.log(`Function scope variables are ${a} ,${b} ,${c}`);
// };
// myFunction();

// if (true) {
//   var a = 7;
//   let b = 23;
//   const c = 45;
//   console.log(`Global scope variables are ${a} ,${b} ,${c}`);
// }

for (let a = 0; a < 10; a++) {
  console.log(`The loop value ${a}`);
}

console.log(`Global scope variables are ${a} ,${b} ,${c}`);

for (var a = 0; a < 10; a++) {
  console.log(`The loop value ${a}`);
}

console.log(`Global scope variables are ${a} ,${b} ,${c}`);
