//making a console for exec()
let re = /hello/;
re = /hello/i;

//Metacharacters
//1. need to start with this particular charater
re = /^h/i;
//2. need to end with the character
re = /!$/i;
//3.Need to start and end with this particular character
re = /^hello$/i;
//4.the position where the "." is can have any character (using ".")
re = /h.llo/i;
//using "*" .You can match any character 0 to n number of times
re = /h*llo/i;
//using optional characters
re = /gre?a?y/;
// //escaping characters(using back slash)
// re = /gre\?a\?/; //here , usning the \ makes the "?" also a part of the string.

// let str = "Hello world!";
// let str = "heeeeello";
let str = "gry";
let result = re.exec(str);
// result = re.test(str);
// console.log(result);
console.log(result);

//making a function for testing the regex and in statements

function testRegex(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches with ${re.source}`);
    } else {
        console.log(`${str} does not match with ${re.source}`);
    }
}
testRegex(re, str);
