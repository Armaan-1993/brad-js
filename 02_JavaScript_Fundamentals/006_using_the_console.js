// alert("yoooo.wasss");
// console.log("yoo waddup");
// console.log("wadddup nigga");

// const stringnum = (num1) => {
//   let sum = 0;
//   for (let i = 0; i < num1; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(stringnum(12));
console.log([1, 2, 3, 4, 5]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.error("This is a major error");
console.clear();
console.warn("This is your final warning");
console.time("stringnum");
const stringnum = (num1) => {
  let sum = 0;
  for (let i = 0; i < num1; i++) {
    sum += i;
  }
  return sum;
};
console.log(stringnum(12));
console.timeEnd("stringnum");
