// let name = "Armaan";

// //to define a string as an object

// let name1 = new String("Armaan"); //this is how you define a string as an object
// name1.age = 13; //you can add prperties like this to the object
// console.log(name);
// console.log(name1);
// console.log(typeof name1); //type of returns an object for name1

// // if (name1 === "Armaan") {
// //     console.log("Its is a string");
// // } else {
// //     console.log("Is's not a string");
// // }

// if (name1 == "Armaan") {
//     //its value is "Armaan" but its type is  not string . It is object. Hence === doesn't work here. We need to use == and not check the data type
//     console.log("Its is a string");
// } else {
//     console.log("Is's not a string");
// }

//Number as object

let num1 = 8;
console.log(`${typeof num1}, ${num1}`);
let num2 = new Number(8);
console.log(`${typeof num2}, ${num2}`);

//Boolean

let case1 = true;
console.log(`${typeof case1} , ${case1}`);
let case2 = false;
console.log(`${typeof case2} , ${case2}`);

//function
let getSum1 = function (x, y) {
    return x + y;
};
console.log(getSum1(1, 2));

let getSum2 = new Function("x", "y", "return x + y"); //this is how you use a function as an object
console.log(typeof getSum2, getSum2(2, 4));

//objects

let obj1 = { name: "Armaan" };
let obj2 = new Object({ name: "Armaan" });

console.log(obj2);
console.table(obj2);

//arrays

let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(7, 8, 9, 10, 11);
console.log(array2);

//regular expressions

let reg1 = /\w+/;
let reg2 = new RegExp("\\w+");
console.log(reg1);
console.log(reg2);
