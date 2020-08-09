// const getName = (name) => {
//     console.log(name);
// };
// getName("Armaan");

// console.log("This is a new function");

//checking undefined for varibales

// let name;
// function checkForDefinition() {}
// if (name === undefined) {
//     console.log("The variable is undefined");
// } else {
//     console.log("Its not undefined");
// }
// checkForDefinition();

//checking undefined for objects

// let customer = {
//     name: "Armaan",
//     age: 26,
// };
// function checkObject(object) {
//     if (object.place === undefined) {
//         console.log("The property is undefined");
//     } else {
//         console.log("The property is defined");
//     }
// }
// checkObject(customer);

// let name = "Armaan";
// console.log(typeof name);
// function test() {
//   return name;
// }
// console.log(typeof test);

// let x = "yoyoyo" * 100;
// // if (isNaN(x)) {
// if (typeof x === NaN) {
//   console.log("x is a NaN type");
// } else {
//   console.log("x is a NaN type");
// }
// let y = 0 / 0;
// console.log(typeof x);
// console.log(typeof y);

// let z = 10 / 0;
// if (isNaN(z)) {
// }
// console.log(typeof z + ", and it is NaN");
// console.log(z);

// if (99 == "99") {
//   console.log("A number equals a string!");
// } else {
//   console.log("No way a number equals a string");
// }

// let x = "1";
// if (x == true) {
//   console.log("It's true");
// }

// let x = null;
// if (x == undefined) {
//   console.log("It's true");
// }

// let x = "";
// if (x == true) {
//   console.log("It's true");
// } else {
//   console.log("It's false");
// }
// let x = true;
// if (x == "true") {
//   console.log("It's true");
// } else {
//   console.log("It's false");
// }

// let x = "mango";
// let y = "meter";
// if (x > y) {
//   console.log("x is greater");
// } else {
//   console.log("y is greater");
// }

// let x = "10" * 10;
// console.log(x);

// let x = 2 + "1 1";
// console.log(x, typeof x);

// function findCarInLot(car) {
//   for (var i = 0; i < lot.length; i++) {
//     if (car === lot[i]) {
//       return i;
//     }
//   }
//   return -1;
// }
// var chevy = {
//   make: "Chevy",
//   model: "Bel Air",
// };
// var taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
// };
// var fiat1 = {
//   make: "Fiat",
//   model: "500",
// };
// var fiat2 = {
//   make: "Fiat",
//   model: "500",
// };
// let lot = [chevy, taxi, fiat1, fiat2];
// let loc1 = findCarInLot(fiat2);
// console.log(loc1);
// let loc2 = findCarInLot(taxi);
// console.log(loc2);
// let loc3 = findCarInLot(chevy);
// console.log(loc3);
// let loc4 = findCarInLot(fiat1);
// console.log(loc4);

// function lieDetectorTest() {
//   var lies = 0;
//   var stolenDiamond = {};
//   if (stolenDiamond) {
//     console.log("You stole the diamond");
//     lies++;
//   }
//   var car = {
//     keysInPocket: null,
//   };
//   if (car.keysInPocket) {
//     console.log("Uh oh, guess you stole the car!");
//     lies++;
//   }
//   if (car.emptyGasTank) {
//     console.log("You drove the car after you stole it!");
//     lies++;
//   }
//   var foundYouAtTheCrimeScene = [];
//   if (foundYouAtTheCrimeScene) {
//     console.log("A sure sign of guilt");
//     lies++;
//   }
//   if (foundYouAtTheCrimeScene[0]) {
//     console.log("Caught with a stolen item!");
//     lies++;
//   }
//   var yourName = " ";
//   if (yourName) {
//     console.log("Guess you lied about your name");
//     lies++;
//   }
//   return lies;
// }
// var numberOfLies = lieDetectorTest();
// console.log("You told " + numberOfLies + " lies!");
// if (numberOfLies >= 3) {
//   console.log("Guilty as charged");
// }

var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
if (presentableText.length > 0) {
}
console.log(presentableText);
