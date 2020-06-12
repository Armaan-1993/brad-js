# 006 Using The Console

Using console:

* It has many shortcuts.
eg: if you tyoe 4+4 just like that , you get 8

* Typing ```document``` in the console will give you a defaul list of html codes to start the program.
* Since you are running live server , anything to be displayed as output from the js code will be displayed in the console .

* ```console.table()``` can be used to display your data in a tabular form
* ```console.error()``` can be used to display your data as an error.
* ```console.clear();``` can be used to clear your console
* ```console.warn();``` can be used to display a message as a warning.
* the cobination of ```console.time()``` and ```console.timeend()``` is used to find the time taken to exicute the commands 
defined btwn them.

eg:
 
```
console.time("stringnum");
const stringnum = (num1) => {
  let sum = 0;
  for (let i = 0; i < num1; i++) {
    sum += i;
  }
  return sum;
};
console.log(stringnum(12));
console.timeEnd("stringnum");
```

# 007 Variables :

* While defining a variable , you can either use the $ , _ or Camel casing.
 ($ is basically used while using j query)\
* Camel casing is more suggested while definfing variables.

eg:

let myName = 'armaan';

* while using const to initialise variables , you cannot the change the variable value once it is initialised and the variable needss
to be given a value and left undefined or else it will throw an error.

* we can use const to define arrays or objects as well. However , after defining them , we can change the value inside them if we wish,
but we cannot define another array or object itself to the same variable.
Hence it is recommended to use let in places like these and only use const when we dont want the value of the variable to change throughout
the program.

**arrays can also be displayed using console.table. Not just objects

Syntax for adding an key value pair to the object is:

objectname["key":"value"];

Since you're using the console , you'll need to use "" for the key.

# 008 Data Types In Javascript:

* In js , decimals , integers etc are all considered as numbers unlike other programming languages.

* There are tw0 types of data types.
1. Primitive = The value is stored directly to the variable.
2. Reference = The value is not directly stored to the variable and can be accessed by refernce.
eg: arrays , objects etc.
3. JS is a dyna,ic langiaghe since the value stored in a variable can be changed from even one data type to another ,
ie from numbers to strings to objects etc on the same varible itself. This isn't allowed on other static langusges because 
in c++ like languages we need to define the type as int num = 5; or etc and cannot change its data type later on.

** ```typeof``` operator can be used to show the data type of a variable.

eg:

console.log(typeof num);

* ```symbol``` is a new type of data type of JS.
Its defined as:
eg:
```
let symbolvar = Symbol();
```

* ```Date``` is also a new type of data type.

eg:

```
let today = new Date();
```
Date is a method and if you define it without using "new" , the type will become a string.
Hence , if you define it using "new" , the data type will be object.

# 009 Type Conversion:

Type conversion is essesntial because otherwise we'll have to create variables for each and every type of data.

* The ```Date();``` method is used to fetch the currentr date and time.

It can also be converted to string , like other data types.

eg:

```
let today = String(new Date());
```

Just like String() converter , we can use thr .toString method for the same purpose.

Likewise , the Number() method is used to convert a data type to number.
If it cannot be converted , then the result will be NaN = Not a number.

Using ```parseInt()``` can convert the string to a number. However , this function method cannot be used in the case of decimals ,
suppose if we want to convert the string "123.66" to decimals. It will only output 123.
Hence if we want the decimal part as well , we use ```parseFloat();```

Also , ```.toFixed()``` can be used to convert to number.
The value inside the () will give you the number of decimal places to be outputted. 


* Type coersions:
eg:

```
let num1 = String(14);
let num2 = 32;
let sum = Number(num1 + num2);
console.log(sum);
console.log(typeof sum);
```

Here , JS engine converts a num2 to string (coz num1 is a string) and then just concatinates the two strings to give the output 1432. 
This is done by JS.This is an example of type coversion.


# 010 The Math Object:

* ```Math``` is an object and it has many properties inside them.
eg:

If you call ```Math.PI``` , it will use the property of PI inside the Math object.
It is also a method.

Math.round(2.8) rouhnds the number to 3. However , we can specify to round it lower or uppewr .
If you want to round it lower , we use ```Math.floor(2.8)``` and we get 2,
and if we want to round it higher we use ```Math.ceil(2.1)``` and we will get 3.

To print random numbers every time we run the program  , we use ```Math.random();```
```Math.random * 20:``` is used in the same case to print decimals with whole numbers.

```val = Math.floor(Math.random() * 20 + 1);``` is used to print random numnbers every time , whcih is also a whole number with
a decimal and also round them to the higer number using ```Math.floor```


# 011 String Methods Concatenation:

Appending strings will leave a space between them:

eg:
```
const name = "Armaan";
name += "Mathew";
console.log(name);
```

* Using \ will take away the power of a character.

eg:

```console.log("yo waaddddup niggah you ain't amazing");```

Here, since we are already using a ```'``` in the beginning and end , we need to use \ to take the power away from the ```'``` used in
```ain't``` or else it will yeild an undesired output.

* Using .concat() method:

```let newstring = first.concat(" ", last);```

* To find the a character at an index of a string:
```let val = first[2];```

* To find the index of a string:

```val = first.indexOf("A");```

* .charAt() method is used to find the character at a given index.
```val = first.charAt(first.length - 1);``` - It is used to find the last character of a string.

*
```
val = first.slice(0, 3);
val = first.slice(-3); // this will slice from behind
val = first.substring(0, 4);
```

The ```slice``` and ```substring``` method are used to derive a portion of the string.

*string.split(",") = Using this method will split at the point where JS encounters the character given inside the (",").
Here , it will split at the comma.

eg:

```
val = "Hi , yo my name is Armaan and I am a yolo";
newVal = val.split("y");
```

This is the output:

```["Hi , ", "o m", " name is Armaan and I am a ", "olo"]```

*
```incldues()``` method is used to see if a string has a particlalur charater or string. If it does , it will yeild a true or else false. 

012 Template Literals:

* We use template literals to add data to html tags and display them in the browser.

They can be used to add any form of data to the HTML tags which is in turn displayed in the browser.

eg:

```
let html = `<ul>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>Age: ${age}</li>
    <li>Work: ${work}</li>
    <li>Sex: ${sex}</li>
    <li>${hello()}</li>
    <li>${2 + 5 + 5 * 5 + 6}</li>
    <li>${age < 26 ? "I'm young" : "I'm not too young"}</li>    
    <li>${difference()}</li>
  </ul>`;
```

Note: Since this is used in a JS file , we need to add backticks and then only use the tags inside them or else javaScript
will not recognise these tags.

Also , note that in order to display them in the browser , we need to specify the path of the html and assign it to the string
consisiting of the data:

Here , it is ```document.body.innerHTML=html```

# 013 Arrays - Array Methods:



