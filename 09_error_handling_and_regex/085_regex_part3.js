let re = /hello/i;
//ussing brackets - here , the characters within the brackets have to be present. Otherwise , it will return nill
re = /he[p]lo/;
//it must start with h or e
re = /[he]llo/i;
// to start with any albhabel except h and e. Note that in this case , the ^ is inside the square bracket
re = /[^he]llo/;
//if ^ is outside the square brackets , then it must start with only h and e
re = /^[he]llo/;
//if you want to start with any uppercse
re = /[A-Z]llo/;
//if you wamt to start with a lower case
re = /[a-z]llo/;
//using more than one letter . Her it must start with one uppercase and ond one lower case
re = /[A-Z][a-z]llo/;
//doing the above with numbers
re = /[0-9][0-9]llo/;
//using quantifiers
re = /hel{2}o/; // here , it is such that there should be 2 "l" in the word. The quantifier checks the charater to its left. Which is the led of the bracket
re = /he{2,}llo/; //here ,it signifies that it should have atleast 2 "e" or more
//here , we need to have between 2 to 4 "l"
re = /hel{2,4}o/;
//using paranthesis
re = /([0-9]x){3}/; //using paranthesis to group the code

let str = "0x4x3x";

let result = re.exec(str);
console.log(result);

function testRegex(re, str) {
    if (re.test(str)) {
        console.log(`"${re.source}" matches with the string ${str}`);
    } else {
        console.log(`"${re.source}" does not match with ${str}`);
    }
}
testRegex(re, str);
