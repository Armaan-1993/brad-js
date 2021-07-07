// const firstName = "Armaan";
// const lastName = "Mathew";

// let concatinate;
// concatinate = firstName + lastName;

// console.log(concatinate);

//Concatination

// const firstName = "Armaan";
// const lastName = "Mathew";

// // console.log(`${firstName} ${lastName}`);

// //to append

// // const name = "Armaan";
// // name += "Mathew";
// // console.log(name);
// console.log(
//   "Hi, my first name is " + firstName + " and my last name is " + lastName
// );
// console.log("yo waaddddup niggah you ain't amazing");

// //String.length

// let val = "firstName".length;
// console.log(val);

//Using .concat():

let first = "armaan";
let last = "Mathew";
let newstring = first.concat(" ", last);
let upper = first.toUpperCase();
let val = first[2];
// console.log(val);
console.log(upper);
console.log(newstring);
val = first.indexOf("a");
val = first.lastIndexOf(`a`);
val = first.charAt(first.length - 1);

val = first.slice(0, 3);
val = first.slice(-3);
val = first.substring(0, 4);

val = "Hi , yo my name is Armaan and I am a yolo";
let newVal = val.split("y");

newVal = val.replace("Hi", "yo!");

//Incldues();
newVal = val.includes("yo");
console.log(newVal);

console.log(val);
