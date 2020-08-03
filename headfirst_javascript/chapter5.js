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

function makeCar() {
    let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["red", "blue", "tan", "yellow", "white"];
    let convertible = [true, false];
    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 5) + 1;
    let rand6 = Math.floor(Math.random() * 2);
    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0,
    };
    return car;
}

function displayCar(car) {
    console.log(
        "Your new car is a " + car.year + " " + car.make + " " + car.model
    );
}
let carToSell = makeCar();
displayCar(carToSell);
