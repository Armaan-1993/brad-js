//console.log

function sayHello() {
    console.log("HEllo");
}
sayHello();

const sayYo = () => {
    console.log("YO");
};
sayYo();

const sayNo = () => console.log("No"); //arrow function in one line
sayNo();

//return  using the usual function

function returnSomething() {
    return "yo wadup";
}
console.log(returnSomething());

//return using arrow functions

const retSomething = () => "yooooooooo"; //if you use arrow functions , you don't really need to write "return "yooooooooo".You can save a line by writing whatever you want to return after the arrow , in the same line
console.log(retSomething());

//retutning objects

function returnObj() {
    return { name: "Armaan" };
}
console.log(returnObj());

const returnObject = () => ({
    name: "Rehaan",
}); //use () outside an object body to return it, in case of arrow functions
console.log(returnObject());

//passing parameters

//single

const myName = (name) => {
    //if you pass single parameters , you dont even need to pass the parameter in brackets.
    console.log(`My name is ${name}`);
};
myName("Armaan");

//multiple

const myFullName = (firstName, lastName) => {
    console.log(`My name is ${firstName} ${lastName}`);
};
myFullName("Armaan", "Mathew");

//using map

let nameArray = ["Armaan", "Rehaan", "Saju", "Suja"];

const nameLengths = nameArray.map(function (name) {
    return name.length;
});
console.log(nameLengths);

const nameData = nameArray.map((name) => {
    return name.length;
});
console.log(nameData);
