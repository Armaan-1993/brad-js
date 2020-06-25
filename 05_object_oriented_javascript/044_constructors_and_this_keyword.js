// let details = {
//     name: "Armaan",
//     age: 26,
//     address:
//         "Chelikuzhyil House , thekkemala PO , kozhencherry , Pathanamathitta dist",
//     pincodeOfAddress: 689654,
// };

// console.table(details);

// defining a costructor

// function Person() {
//     // a constructor must strat with a capital letter
//     this.name = "Armaan"; //using "this" keyword , it will refer to the current instance of the object
// }

// let rehaan = new Person(); // to make an oobject from the constructor

// let john = new Person();
// console.log(john);

// function People(age) {
//     this.age = age;
// }

// let armaan = new People(23);
// rehaan = new People(45);
// console.log(armaan);

// function automobiles(car, power) {
//     this.cars = car;
//     this.cars = power;
//     console.log(this); //this will console all the objects instantiated to "this"
// }
// // console.log(this); //this displays the window object. This happens when you console it globally
// // this.alert("yooo");
// let toyota = new automobiles("qualis", 233);
// let mitsubishi = new automobiles("pajero", 446);
// // console.log(toyota);

function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob); //The date obhject already has a predefined new while for the constructor "Person" , we provide it additonally
    this.calculateAge = function () {
        let diff = Date.now() - this.birthday.getTime(); //date.now() give the current date value
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
}
let armaan = new Person("Armaan", "23 October 1993");
console.log(armaan.calculateAge());
