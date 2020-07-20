//matches any alphanumeric character including "_"
let re = /\w/;
//matches one or more alphanumeric character
re = /\w+/;
//Matches with any character except alphanumeric characters and "_"
re = /\W/;
//Matches with any one or more characters except alphanumeric characters and "_"
re = /\W+/;
//mataches with only digits
re = /\d+/;
//matches all non digit characters
re = /\D/;
//matching space element
re = /\s/;
//matching everything except space elements
re = /\S/;
//using word boundaries
re = /tanya\b/i; //it searches if the exact word "hell" is present inside the string and that is only when it matches. The word "hell" is present inside the word hello, But it doesn't match in the case where we use word bondaries.

//Assertions - They are regex with conditions.
//In this case , x is followed by y and it will be matched only if x is followed by y. Oytherwise it will return null
re = /x(?=y)/;
//In this case , it will match all cases where x is not followed by y
re = /y(?!x)/;

let str = "xccy";
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
