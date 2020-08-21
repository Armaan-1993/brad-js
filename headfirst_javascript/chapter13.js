function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
//to create prototypes

Dog.prototype.bark = function () {
  if (this.weight > 10) {
    console.log("woof");
  } else {
    console.log("WOOF");
  }
};
Dog.prototype.species = "Canine";
Dog.prototype.wag = function () {
  if (this.breed) {
    console.log("Wags the tail");
  } else {
    console.log("Me not gonna wag my tail");
  }
};
Dog.prototype.sit = function () {
  if (this.name === "Harvey") {
    console.log("I can sit too! I have been properly trained!");
  }
};
Dog.prototype.sitting = false;
let peggy = new Dog("Peggy", "Basset Hound", 30);
let snoopy = new Dog("Snoopy", "Basset Hound", 28);
let harvey = new Dog("Harvey", "Dashhund", 20);
peggy.bark = function () {
  console.log("WOOF WOOF WOOF");
};
// if (this.sitting) {
//   console.log(this.name + " is already sitting");
// } else {
//   this.sitting = true;
//   console.log(this.name + "is sitting now");
// }
let property = peggy.hasOwnProperty("name");
peggy.bark();
peggy.wag();
harvey.sit();
// console.log(property);
property = peggy.hasOwnProperty("wag");
console.log(property);
// function Robot(name, year, owner) {
//   this.name = name;
//   this.year = year;
//   this.owner = owner;
// }
// Robot.prototype.maker = function () {
//   if (this.name === "Robbie") {
//     console.log(
//       robby.name +
//         " was made by " +
//         robby.maker +
//         " in " +
//         robby.year +
//         " and is owned by " +
//         robby.owner
//     );
//   }
// };
// Robot.prototype.speak = function () {
//   if (this.name === "Rubie" || this.name === "Rosie") {
//     console.log("We can speak as well");
//   }
// };
// Robot.prototype.makeCoffee = function () {
//   if ((this.name = "Roboe")) {
//     console.log("I am designed to make coffee");
//   }
// };
// Robot.prototype.blinkLights = function () {
//   if (this.name === "Rubie" || this.name === "Rosie") {
//     console.log("We can both blibk lights");
//   }
// };
// let robby = new Robot("Rosie", "Coffee", "George");
// let rosie = new Robot("Robie", "Clean", "Mandy");
// robby.onOffSwitch = function () {
//   if ((this.name = "Rubie")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// robby.makeCoffee = function () {
//   if ((this.name = "Rosie")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// rosie.cleanHouse = console.log(
//   robby.name +
//     " was made by " +
//     robby.maker +
//     " in " +
//     robby.year +
//     " and is owned by " +
//     robby.owner
// );
// robby.makeCoffee();
// robby.blinkLights();
// console.log(
//   rosie.name +
//     " was made by " +
//     rosie.maker +
//     " in " +
//     rosie.year +
//     " and is owned by " +
//     rosie.owner
// );
// rosie.cleanHouse();
