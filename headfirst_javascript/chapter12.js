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

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
// console.log(new Dog("Peggy", "basset hound", "38"));
let doggo = new Dog("Peggy", "basset hound", "38");
console.log(doggo);

// function Duck(type, canFly) {
//   this.type = type;
//   this.canFly = canFly;
// }
