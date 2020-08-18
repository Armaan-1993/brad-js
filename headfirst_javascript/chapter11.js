// function handle() {
//   alert("Everythig is good");
// }
// window.onload = handle;

// window.onload = function () {
//   alert("Everythig is good");
// };

// setTimeout(function () {
//   alert("The cookies are done baking! Time to get them out of the oven");
// }, 6000);

// function vaccine(dosage) {
//   if (dosage > 0) {
//     inject(dosage);
//   }
// }
// administer(patient, vaccine, time);

//using varible to call and returm

// let vaccine = function (dosage) {
//   if (dosage > 0) {
//     inject(dosage);
//   }
// };
// administer(patient, vaccine, time);

// name("Armaan");
// let name = function (myName) {
//   console.log(`My name is ${myName}`);
// };
// name("Armaan");
// let myName = "Armaan";
// function name() {
//   let myName = "Rehaan";
//   return myName;
// }
// console.log(name());

let myName = "Armaan";
function name() {
  let myName = "Rehaan";
  let mandrake = function () {
    // mandrake("Armaan");
    return myName;
  };
  // return inner();
  console.log(mandrake());
}
console.log(name());
