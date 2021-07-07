let name = "123";
const checkIfCorrect = () => {
  if (name === 123) {
    return "Correct";
  } else {
    return "Incorrect";
  }
};
console.log(checkIfCorrect());

const checkIfCorrect = () => {
  if (name == 123) {
    return "Correct";
  } else {
    return "Incorrect";
  }
};
console.log(checkIfCorrect());

const checkIfCorrect = () => {
  if (name !== 123) {
    return "Incorrect";
  } else {
    return "Correct";
  }
};
console.log(checkIfCorrect());

let name;
if (typeof name === "undefined") {
  console.log("It is undefined");
} else {
  console.log("It is not undefined");
}

const checkIfCorrect = () => {

let name = 7;
const checkIfCorrect = () => {
  if (name > 123) {
    return "Correct";
  } else {
    return "Incorrect";
  }
};
console.log(checkIfCorrect());

let name = 7;
const checkIfCorrect = () => {
  if (name >= 123) {
    return "Correct";
  } else {
    return "Incorrect";
  }
};
console.log(checkIfCorrect());

let val = "dangerous";
const checkIfCorrect = () => {
  if (val === "Dangerous") {
    return "It's correct";
  } else if (value === "dangerous") {
    return "It's partially correct";
  } else {
    return "It's incorrect";
  }
};
console.log(checkIfCorrect());

//LOGICAL OPERATORS
let age = 89;
const checkIfCorrect = () => {
  if (age > 0 && age < 25) {
    return "It's eligible";
  } else if (age > 0 && age < 65) {
    return "It's okay for the adult section";
  } else {
    return "It's not possible. He's too old";
  }
};
console.log(checkIfCorrect());

let age = 89;
const checkIfCorrect = () => {
  if (age > 15 || age < 25) {
    return "It's eligible";
  } else if (age > 25 || age < 65) {
    return "It's okay for the adult section";
  } else {
    return "It's not possible. He's too old";
  }
};
console.log(checkIfCorrect());

//TERNARY OPERATORS:

let value = 130;
const checkIfCorrect = () => {
  return value === 134 ? `It's ${value}` : `It's not ${value}`;
};
console.log(checkIfCorrect());

let number = 50;
if (number === 56) console.log(56);
else console.log("not 56");
