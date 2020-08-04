// let chevy = {
//     make: "Chevy",
//     mileage: 1021,
//     convertable: false,
//     passengers: 2,
//     year: 1957,
//     model: "Bel Air",
//     color: "Red",
// };

// let taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341,
// };

// chevy.color = "Blue";
// chevy.needWashing = true;
// delete chevy.passengers; //delete a property
// console.log(chevy);

// function properties() {
//     if (chevy.mileage < 1000) {
//         return false;
//     } else if (chevy.color != "Red") {
//         return false;
//     }
//     return true;
// }
// console.log(properties());

// function prequal() {
//     if (taxi.worthALook) {
//         console.log(`We have this pproperty inside the object "taxi"`);
//     } else {
//         console.log(`We don't have that property inside the object "taxi"`);
//     }
// }
// console.log(prequal());

// dog = {
//     name: "Fido",
//     age: 4,
//     weight: 20.2,
//     hieght: 132,
// };

// function changeDogDetails(difference) {
//     //whatever you change via a function to work the object values , those values will be different inside the objects , even after the function call is over.
//     dog.weight = dog.weight - difference;
//     console.log(`The new weight is ${dog.weight}`);
// }
// changeDogDetails(10);

//page 194

// let superSecretFile = {
//     level: "classified",
//     opened: 0,
//     password: 2,
//     contents: "Dr. Evel's next meeting is in Detroit.",
// };
// let sceret = getSecret(superSecretFile, superSecretFile.contents);
// console.log(sceret);

// function makeCar() {
//     let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
//     let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
//     let years = [1955, 1957, 1948, 1954, 1961];
//     let colors = ["red", "blue", "tan", "yellow", "white"];
//     let convertible = [true, false];
//     let rand1 = Math.floor(Math.random() * makes.length);
//     let rand2 = Math.floor(Math.random() * models.length);
//     let rand3 = Math.floor(Math.random() * years.length);
//     let rand4 = Math.floor(Math.random() * colors.length);
//     let rand5 = Math.floor(Math.random() * 5) + 1;
//     let rand6 = Math.floor(Math.random() * 2);
//     let car = {
//         make: makes[rand1],
//         model: models[rand2],
//         year: years[rand3],
//         color: colors[rand4],
//         passengers: rand5,
//         convertible: convertible[rand6],
//         mileage: 0,
//     };
//     return car;
// }

// function displayCar(car) {
//     console.log(
//         "Your new car is a " + car.year + " " + car.make + " " + car.model
//     );
// }
// let carToSell = makeCar();
// displayCar(carToSell);

// myCars = makeCar();
// function displayThis(yoyo) {
//     console.log(
//         "Your new car is a " + yoyo.year + " " + yoyo.make + " " + yoyo.model
//     );
// }

// displayThis(myCars);

// let dog = {
//     name: "Peggy",
//     petName: "Pegasus",
//     age: 6,
//     breed: "Basset Hound",
//     messageFunction: function () {
//         console.log("We love you Peggy. And we miss you!!");
//     },
// };
// dog.messageFunction();

// let song = {
//     name: "Walk This Way",
//     artist: "Run-D.M.C.",
//     minutes: 4,
//     seconds: 3,
//     genre: "80s",
//     playing: false,
//     play: function () {
//         if (this.playing === false) {
//             this.playing = true;
//             console.log("Playing " + this.name + " by " + this.artist);
//         }
//     },
//     pause: function () {
//         if (this.playing) {
//             this.playing = false;
//         }
//     },
// };
// song.play();
// song.pause();

// let eightBall = {
//     index: 2,
//     advice: ["yes", "no", "maybe", "not a chance"],
//     shake: function () {
//         this.index = this.index + 1;
//         if (this.index >= this.advice.length) {
//             this.index = 0;
//         }
//     },
//     look: function () {
//         return this.advice[this.index];
//     },
// };
// eightBall.shake();
// console.log(eightBall.look());

// let cadi = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892,
//     started: false,
//     start: function () {
//         if (this.started === false) {
//             this.started = true;
//         }
//     },
//     stop: function () {
//         if (this.started === true) {
//             this.started = false;
//         }
//     },
//     drive: function () {
//         if (this.started) {
//             console.log("The car has started");
//         } else if (!this.started) {
//             console.log("We need to start the car");
//         }
//     },
// };
// cadi.drive();
// cadi.start();
// cadi.drive();
// cadi.stop();

// let taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341,
//     started: true,
//     stop: function () {
//         this.started = false;
//     },
// };
// taxi.stop();
// console.log(taxi);

//page 209 - using fiat[prop] and fiat["prop"] as you cant use fiat["prop"] while accessing the property and you need to use fiat[prop];

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function () {
        if ((this.fuel = 0)) {
            console.log("No fuel bro");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Vroom Vroom");
            } else {
                console.log("We need to stop the engine as the fuel is slow");
            }
        } else {
            console.log("You need to start your engine first");
        }
    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    },
};

// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.stop();

// fiat["wheel"] = "Bridgestone";

// for (let prop in fiat) {
//     console.log(prop + ":" + fiat[prop]);
// }

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
