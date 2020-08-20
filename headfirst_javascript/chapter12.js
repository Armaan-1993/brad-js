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
// function Cars(
//   make,
//   model,
//   year,
//   color,
//   passenger,
//   convertable,
//   mileage,
//   started
// ) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.passenger = passenger;
//   this.convertale = convertable;
//   this.mileage = mileage;
//   this.started = started;
//   this.start = function () {
//     if (this.started === false) {
//       this.started = true;
//       console.log("The car has started now");
//     }
//   };
// }
// let chevy = new Cars("Chevy", "Bel Air", 1957, "red", 2, false, 1021, false);
// let taxi = new Cars(
//   "Webville Motors",
//   "Taxi",
//   1955,
//   "yellow",
//   4,
//   false,
//   281341
// );
// let arrayOfCars = [chevy, taxi];
// for (let i = 0; i < arrayOfCars.length; i++) {
//   arrayOfCars[i].start();
//   console.log(`${arrayOfCars[i].make} has started`);
//   // if (arrayOfCars[i].mileage < 2000) {
//   //   console.log("Mileage is less");
//   // }
// }
// chevy.start();
// taxi.start();

// //rewriting the car constructor
// function Cars(carParameters) {
//   this.make = carParameters.make;
//   this.model = carParameters.model;
//   this.year = carParameters.year;
//   this.color = carParameters.color;
//   this.passenger = carParameters.passenger;
//   this.convertale = carParameters.convertable;
//   this.mileage = carParameters.mileage;
//   this.started = carParameters.started;
//   this.start = function () {
//     if (this.started === false) {
//       this.started = true;
//       console.log("The car has started now");
//     }
//   };
// }
// let taxiObj = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1955,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
//   started: false,
// };
// let chevyObj = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengers: 4,
//   convertible: false,
//   mileage: 10787,
//   started: false,
// };
// let taxi = new Cars(taxiObj);
// let chevy = new Cars(chevyObj);
// let arrayOfCars = [chevy, taxi];
// for (let i = 0; i < arrayOfCars.length; i++) {
//   arrayOfCars[i].start();
//   console.log(`${arrayOfCars[i].make} has started`);
//   // if (arrayOfCars[i].mileage < 2000) {
//   //   console.log("Mileage is less");
//   // }
// }
// chevy.start();
// taxi.start();
// for (let i = 0; i < arrayOfCars.length; i++) {
//   if (arrayOfCars[i] instanceof Cars) {
//     console.log(`${arrayOfCars[i]} is an instance of the Car Constructor`);
//   }
// }

//dog catcher function
// function dogCatcher(obj) {
//   if (obj instanceof Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function Cat(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }
// let meow = new Cat("Meow", "Siamese", 10);
// let whiskers = new Cat("Whiskers", "Mixed", 12);

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function () {
//     if (this.weight > 25) {
//       console.log(this.name + " says Woof!");
//     } else {
//       console.log(this.name + " says Yip!");
//     }
//   };
// }
// let fidoObj = { name: "Fido", breed: "Mixed", weight: 38 };
// let fido = new Dog(fidoObj);
// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let dogs = [meow, whiskers, fido, fluffy, spot];
// for (let i = 0; i < dogs.length; i++) {
//   if (dogCatcher(dogs[i])) {
//     console.log(`${dogs[i].name} is a dog`);
//   }
// }

// let now = new Date();
// let mydate = now.toString();
// let mydate = now.getFullYear();
// mydate = now.getMilliseconds();
// mydate = now.getUTCDate();
// mydate = now.getDay();
// console.log(mydate);

// let mydateObj = new Date("1 October 1993 23:09 pm");
// console.log(mydateObj);
// delete Object.name;
// Object.age = 15;

// let newArray = new Array(3);
// newArray[0] = 5;
// newArray[1] = 10;
// // newArray[2] = function () {
// //   console.log("Hello World");
// // };
// newArray[2] = 15;
// let result = newArray.every(function (x) {
//   return x % 5 === 0;
// });
// console.log(newArray.reverse());
// console.log(result);

let myarray = new Array("a", "b", "x");
// console.log(myarray);

function number(x) {
  console.log(x);
}
for (let i = 0; i < myarray.length; i++) {
  number(myarray[i]);
}
