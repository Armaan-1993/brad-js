//regular expressions are used in places which has a pattern. They can also be used to search for stuff inside code
let re;
re = /hello/; //this si how you write a regular expression
re = /hello/i; // "i" is used to make the regex insensitive to casing
// re = /hello/g; //g is used to search the regex globally based on instances
// console.log(re);

// console.log(re.source);

//functions used to evaluate regular expressions
//1. exec()

// const result = re.exec("hello world");
// const myResult = re.exec("this is my hello world");
// const result = re.exec("sdsdasdsdhellooqekao world");
// const myResult = re.exec("no wordl");
//what exec does is it checks if the regex is present inside the string given inside the exec function and it also gives you the index of the regex as ana array. Note that it checks the index by each letter.
//otherwise , if the regex is not present in it , it returns null
// console.log(myResult);
// console.log(result);
// console.log(result.index);
// console.log(result[0]); //it checks the index position with respect to the regex and not the actual index of the string

//2.test()
// const result = re.test("Hello");
// const result = re.test("hello");
// console.log(result);

//match()
// const match = "My Hey world";
// console.log(match.match(re)); // it basically works as the opposite of exec , where here we use the regex inside. Returns an array as well , and returns null if it's not there.

//search()
// const str = "Hi There . Mr Armaan";
// const result = str.search(re); //It returns the value of index of the regex and if it's not there , it will return -1
// console.log(result);

//replace()
const str = "Hello there";
result = str.replace(re, "Hi");
console.log(result);
//it replaces the regex with string you wana replace it with.
//If the regex is not there in string , then the same string itself will be printed.
