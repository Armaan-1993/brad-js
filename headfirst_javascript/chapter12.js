//objects using object literals:

// let obj = {
//   name: "Armaan",
//   age: 26,
//   address: "Pathanamthitta , kerala",
//   company: "Vonnue innovations",
//   workFunction: function () {
//     console.log(`My name is ${this.name} and I work at ${this.company}`);
//   },
//   condititonForWork: true,
// };
// for (let property in obj) {
//   console.log(`${property} : ${obj[property]}`);
// }
// obj.workFunction();

// let dog = {
//   name: "Fido",
//   breed: "Mixed",
//   weight: 38,
// };

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }
// // console.log(new Dog("Peggy", "basset hound", "38"));
// let doggo = new Dog("Peggy", "basset hound", "38");
// console.log(doggo);

// function Duck(type, canFly) {
//   this.type = type;
//   this.canFly = canFly;
// }

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }
// let peggy = new Dog("Peggy", "basset hound", "38");
// let milo = new Dog("Milo", "Dashund", "30");
// let ninja = new Dog("Ninja", "German Shepherd", "54");
// let arrayOfDogs = [peggy, milo, ninja];
// for (let i = 0; i < arrayOfDogs.length; i++) {
//   if (arrayOfDogs[i].weight < 40) {
//     console.log(`${arrayOfDogs[i].name} is a small dog`);
//   } else {
//     console.log(`${arrayOfDogs[i].name} is a big dog`);
//   }
// }

// function ducks(sound, feathered, bird, fly) {
//   this.sound = sound;
//   this.feathered = feathered;
//   this.bird = bird;
//   this.fly = function () {
//     if (this.bird && this.feathered) {
//       console.log(`${this.bird} can fly`);
//     }
//   };
// }
// let newDuck = new ducks("Quack", true, true);
// newDuck.fly();

// function Coffee(roast, ounces) {
//   this.roast = roast;
//   this.ounces = ounces;
//   this.getSize = function () {
//     if (this.ounces === 8) {
//       console.log("You have a small blended coffee");
//     } else if (this.ounces <= 12) {
//       console.log("You have a medium blended coffee");
//     } else if (this.ounces <= 16) {
//       console.log("You have a largely blended coffee");
//     }
//   };
//   return "You’ve ordered a small House Blend coffee.";
// }
// let bru = new Coffee("Roasted Bru", 12);
// let nescafe = new Coffee("Roasted Nescafe", 7);

//cars
function Cars(
  make,
  model,
  year,
  color,
  passenger,
  convertable,
  mileage,
  started
) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passenger = passenger;
  this.convertale = convertable;
  this.mileage = mileage;
  this.started = started;
  this.start = function () {
    if (this.started === false) {
      this.started = true;
      console.log("The car has started now");
    }
  };
}
let chevy = new Cars("Chevy", "Bel Air", 1957, "red", 2, false, 1021, false);
let taxi = new Cars(
  "Webville Motors",
  "Taxi",
  1955,
  "yellow",
  4,
  false,
  281341
);
let arrayOfCars = [chevy, taxi];
for (let i = 0; i < arrayOfCars.length; i++) {
  arrayOfCars[i].start();
  console.log(`${arrayOfCars[i].make} has started`);
  // if (arrayOfCars[i].mileage < 2000) {
  //   console.log("Mileage is less");
  // }
}
chevy.start();
taxi.start();
