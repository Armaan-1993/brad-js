//a prtotype is an object itself
//Object.prototype  = inherited to object literals
//Person.prototype = inherited to the constructors we created.

//person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // };
}
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}; //A protype is an object created by defauot when a function is craeted in js

const armaan = new Person("Armaan", "Mathew", "23 October 1993");
const rehaan = new Person("Rehaan", "Mathew", "16 December 2000");
const tanya = new Person("Tanya", "Luiz", "10 October 1994");
console.log(armaan);

console.log(armaan.calculateAge()); //this is how you call a fucntion in a prototype

//creatting another prototype

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
console.log(armaan.getFullName());

//get married

Person.prototype.getMarried = function (newLastName) {
    this.lastName = newLastName;
};
tanya.getMarried("Armaan");
console.log(tanya.getFullName());

//hasOwnProperty checks the propertirs defiend inside the construcotr Person and then gives the result
console.log(armaan.hasOwnProperty("firstName")); //True as firstName is a property defined in Person
console.log(tanya.hasOwnProperty("getFullName")); //this function is defined in the prototypes and is not an actual property. Hence we get false.
