// //basic variables
// console.time();
// const power = (num) => {
//   let powr = num ** 5;
//   return powr;
// };
// console.log(power(21));
// console.timeEnd();

// //using variables without defining them at first

// let number;
// console.log(number);
// number = "this is not a number";
// console.log(number);

// //casing

// let myName = "Armaan";
// my_second_name = "Phiip"; // underscore
// MyThrdName = "Mathew"; //pasval casing
// console.log(`${myName} ${my_second_name} ${MyThrdName}`);

//using const

const myDadsName = "saju";
console.log(myDadsName);
// const myDadsName = "sajuu";
// const nyMomsName;
const myMomsName = "suja";
console.log(myMomsName);

//defining objects and arrays using const
console.time();
const newObject = {
  name: "armaan",
  sex: "a lot",
  number: 7902523045,
  home: "pathanamthitta",
};
// console.log(newObject);
// console.table(newObject);
console.timeEnd();
newObject["sex"] = "male";
console.table(newObject);

const array = [1, 3, 4, 5, 6];
array.push(89);
console.table(array);
