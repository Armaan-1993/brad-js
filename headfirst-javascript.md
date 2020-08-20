
# Notes On Headfirst JavaScript:

## Chapter 1;
* Varible names should beign with a small letter . It can have ```_``` . However , one musn't use _ unless really necessary . Use camel casing instead for joining
two words for variable names
>>>> page 15 (doubt);


## Chapter 2:

* We use the varibale "isSunk" and assign it to ```false``` and after the shiip has sunk , we make it to ```true```.

* ```prompt``` is an inbuilt funciton that the browser uses to get input from the user. It's just like ```alert``` function ,
 but here you can enter a value. So once the value is entered , the value is returned in the form of a string to the varibale inside the code. 
If no value is entered , then a null value is returned. 

* it is better to write multiple conditons in a single line , so as to save space (if possible)

* ```
  if (isStock === true) {
    if (onSale === true) {
        alert("Its a bargain!!");
    }
  } 
  ```
  //this can be written as 

  ```if (isStock === true || onSale === true) {
    alert("Its a bargain!!");
  }
  ```

* OR and AND can  be combined as 
```if ((inStock === true && onSale === true) || price < 60) {
    alert("go buy!!");
}
```
* variables can be assigned as  ```var humid = (temp > 80 && willRain == true);```
* ```if(inStock === true)``` is the same as ```if(inStock)```

*  Math.random generates a number between 0 and 1, but not including 1. The maximum number you can get from Math.random is 0.999.... When
you multiply that number by 5, the highest number you’ll get is 4.999… Math.floor always rounds a number down,
so 1.2 becomes 1, but so does 1.9999. If we generate a number from 0 to 4.999… then everything will be rounded down to 0 to 4.

Hence to generate random numbers btwn 0 and 99 , we use ```Math.floor(Math.random * 100)`` or ```Math.ceiling(Math.random*99)```

## Chapter 3:

* Calling of a function is also called as invoking
* Parameters are the variables in the brackets of the body of the function definition , and the arguments are the variables in the brackets
of the function call
* You can pass in a ny javascript value to a function .So you’ll only define your parameters once, but you’ll probably call
your function with many different arguments.

* JavaScript passes arguments to a function using pass-by-value , which basically means copying the value of the argument to the
parameter variable.

* If there more arguments in the function call compared to the parameters , then jvascript will just ignore the extra argument.
And if its less , the javascript will let the undefined parameter have the value undefined.

* You dont need to use "let" or const whille defining a funtion parameter , since the function does the job of defining 
those variables for us.

* If you use vsriables inside a function without declaring them , then will grt a global scope.
Hence we need to always declare variables first , or even after the function is done executing , those varibles still retain the
value and can cause confusion.

* If you declare a local and a global variable in the same name , then the global varible will be shadowed by the local varibale and
infact , the value of the local varible will be used and not that of the global varible. This is the same case if you define a 
paramter varible of the same name.

* Remember to use global varibles only if necessaery. Otherwise, prefer using local variables.Use globals only when you need the
value through the entire program

* Even though we dont declare a vraiable at the begining of a function , javascript always declares those variables at the begining of the 
function. This process is called Hoisting.

* JavaScript actually makes two passes over your page in the first pass it reads all the function definitions,
and in the second it begins executing your code. So, that allows you to place functions anywhere in your file.

* Remember to not write any more code after using the retur statement inside the function. It's coz if you use return, then the
execution of the function will be stopped there and no further code inside the function will be executed.  

>>>> Doubt on page 93


## Chapter 4:

* Math.random generates a single random number between 0 and 1 for one refresh. Hence , we multiply it with a whole number to make
the generated numbers whole. Thus we use Math.Floor(Math.random * num) to generate numbers between 0 and (num-1) at an instance.

* Its generally easier and a better practice to use a single type of values in an array.

* last item of array = array[array.length - 1]

* When adding new items you have to be careful about which index you’re adding. Otherwise you’ll create a sparse array, 
which is an array with “holes” in it (like an array with values at 0 and 2, but no value at 1).

* An array is actually a special type of object and functions like array.push() are actually built in array functions.

* You can create a sparse array easily, like this:
     ```var sparseArray = [ ];
	sparseArray[0] = true;
	spraseArray[100] = true;```

In this example, the sparseArray has only two values, both true, at indices 0 and 100.The values at all the other indices are
undefined. The length of the array is 101 even though there are only two values. Remember that all those
variables take up memory in your computer, even if they don’t have a value, so make sure you have a good reason to create a
sparse array.

* ```var myarray = new Array(3);``` creates an array of "myarray" of length 3. Then we need to manually add the values in it
,otherwise it will be undefined because it has no values.

## Chapter 5:

* Objects can have any types of data

* if you use space in between property names of objects , you need to use quotes to enclose them; 
	eg ```"my name" : "Armaan"```

* No two properties in an object can have the same name

* With object-oriented programming we think about a problem in terms of objects

* To delete a property , we use the delete keyword , eg : ```delete details.name``` , after which if you access that property , 
it will be undefined.

* Variables don’t actually hold objects. Instead they hold a reference to an object.The reference is like a pointer or an address to the
actual object

* When you call a function and pass it an object, you’re passing the object reference, not the object itself. So using our pass by value semantics, a copy of the
reference is passed into the parameter, and that reference remains a pointer to the original object

* Whatever you change via a function to work the object values , those values will be different inside the objects , 
even after the function call is over

* We typically refer to functions inside an object as methods.

* Functions inside objects and how to run them:
eg:
```
let dog = {
    name: "Peggy",
    petName: "Pegasus",
    age: 6,
    breed: "Basset Hound",
    messageFunction: function () {
        console.log("We love you Peggy. And we miss you!!");
    },
};
dog.messageFunction();
```
* Using a method to change a property is another example of encapsulation whereby we can often improve the maintainability 
and extensibility of code by letting an object worry about how it gets things done. It’s better to have a start method 
that knows how to start the car than for you to have to know “to start the car we need to take the started variable and 
set it to true.” But we get a reference error since JS doesn't knoe where the "started" property is. It is a property if the
fiat object, but JS doest knoe that as usually when we work with a varible in a function , we need to define a paramter , 
a local variable or o global variable. Here , the started is a property of the fiat object and not a usual global varibale. But
JS doesnt knoe that . Hence we define that to JS using the ```this``` keyword. It is used to tell JS that the property defined
in a function or a condition belongs to that object.

```
let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            console.log("Vroom Vroom");
        } else {
            console.log("You need to start your engine first");
        }
    },
};
```
* So if you want to access a property inside an object in a function inside the object , we need to use ```this```.
The real key to understanding this is that whenever a method is called,in the body of that method you can count on this to be 
assigned to the object whose method was called.

* A method is a function. We just call it a method because it lives inside an object. So, a method can do anything function can 
do precisely because a method is a function. Hence it can have other local varibales too and not just that of the object.

* We can add a method to an object after it’s created like I can with a property?
A: Yes. Think of a method as a function assigned to a property, so you can add a new one at any time:

// add a turbo method
```
car.engageTurbo =
function() { ... };
```

* In order to view the properties of an object , or in order to iterate through them ,we can use the for in loop.

eg:
```
for (let prop in fiat) {
    console.log(prop + ":" + fiat[prop]);
}
```
We use ```fiat["color"]``` or ```fiat.color``` to access the properties of fiat object , however , ```fiat["color"]``` is more flexible as you
can make it ```fiat["col" + "or"]```

* There are many objects and methods that we use , namely ```console.log``` , where ```console``` is an object and ```log()``` is a method.

## Chapter 6:

* DOM - Document Object Model

* When you load a page into the browser, not only does the browser parse the HTML and then render it to the display, it also 
creates a set of objects that represent your markup. These objects are stored in the DOM. eg: html - head - body -etc
When JavaScript modifies the DOM, the browser updates the page dynamically, so you see new content on your page.

* HTML and JavaScript are two different languages , but they are interact and communicate with each other using DOM. Its the commin link between both the languages.
JS gets access to the page using ```getElementById```
 
* The document is an object which represents the entire page in your browser and contains the complete DOM, so we can ask it to do things like find an element 
with a specific id. 

* An element object is the browser’s internal representation of what you type into your HTML file, like <p>some text</p>. When the browser loads and
parses your HTML file, it creates an element object for every element in your page, and adds all those element objects to the DOM.

* ```getElementById``` returns the element which has that id.

* After which , we save that data to an variable , and then we can manupulate that data using javascript.

* When you grab an element from the DOM using getElementById, what you get is an element object, which you can use to read, change or replace the element’s 
content and attributes.We can dp the following => Change Stuf , get attributes , change attributes , remove attributes , add attributes etc

* We can use the innerHTML property of the element object to change the content of the element!  

* We label the elements using id's or classes. Each element should contain a unique id or class for them to be distinguished.

*  If you try to get an element from the DOM by id, and that id doesn’t exist in an element, then the call to ```getElementById``` returns a null value. Testing for 
null is a good idea when you use ```getElementById``` to ensure that the element is there before you try to access its properties.

* There is another DOM method named ```getElementsByClassName``` that you can use to get elements by class name. With this method, what you get back is a collection
of elements that belong to the class (becaus multiple elements can be in the same class). Another method that returns a collection of elements is 
```getElementsByTagName```, which returns all elements that match the tag name you specify.

* Make sure to add the script tag linking the Javascript file to the end of the body tag , because if you link to the head or to the top of the body , the
the js code will start executing before the DOM and its element objects have been created by the browser. Hence it will return null and none of the JS code will
be effective.

* If we want to write the jawascript above the body or in the head anyways , we need to specify to the browser that the js should be executed only after bulding
the DOM. Hence we use ```window.onload``` property.

eg: 
```
<script>
            function init() {
                let planet = document.getElementById("greenplanet");
                planet.innerHTML = "Red alert: Hit by fire";
            }
            window.onload = init;
        </script>
```

## Chapter 7:

Here, we are not calling the function ```init```. We are just assigning the function to windows.onload property , so as to load it after the DOM has been bulit.

* Using ```window.onload = function name;``` is a crucial method to run the javascript code wherever you want , after the DOM has been built by the browser

* We use ```elementName.setAttribute("class", "redtext");``` to add or edit an attribute inside the element object. Here , when we add a class , the element 
object has an id = "greenplanet" and class = "redtext".  Followed by using css styling to make the text red in color using the class "redtxt"

* However , if you want to get the value of an attribute of an element , use ```getAttribute```.
eg:

```planet.getAttribute("id")``` ,  where ("id") is the name of the attribute. If you want the attribute of class , then use ```planet.getAttribute("class")```.
Similarly to the case where ```getElementById``` returns ```null``` when the docment object cant find an element with such an id , if the specified attribute is
not available in the element , then ```getAttribute``` returns ```null```.
Hence , it we need ti test for ```null``` value in some cases.

* ```NaN``` is not not a number and it cannot be used for equality purposes or equations.

* Even though ```NaN``` cannot be represented in javascript , it is a number. WE get the number type when we use ```typeof``` operator to check it's type.

* Use ```isNaN(variable)``` to check if the varible has a NaN value or not

* In a line ```let x = 99;
		if (x == '99') {
		console.log("They're equal");```
		
In this code , JS compares 99 and "99" and concludes to equality. JS is smart enough to underdtand this comparison. Here , JS converts the string into number first and then makes the comparison of their values. BUt this only applies to the strings that can be convereted to numbers.

* In case of comparing boolean with numbers/strings that can be converted to numbers, if the number/string is 0 or 1 , 1 is equal to ```true``` and 0 is equal to ```false```.

* ```==``` only checks the value of equality and not the types during comparison.

* 
```let x = null;
if (x == undefined) {
  console.log("It's true");
}
 ```


* Here , ```undefined``` and ```null``` results ```true``` as they both represent no value and hence they're true. However , if we use ```===``` it would have been a different case as it compares the value and the types.


```
let x = "";
if (x == true) {
  console.log("It's true");
} else {
  console.log("It's false");
}
```

* In this case , it yeilds to ```false``` ,as '' is considered as 0. Hence , it evaluates 1==0 and gets false.

* In cases like ```"3" + 5``` , JS converts the number 5 into strng cand concatinates them with
giving the result "35". Thats how addition of strings work. However , if it was ```5 - "3"``` , then the result would be 2 , as this opeartion has to be done and jS converts the string "3" to number and provides the difference 2. This is the same case in ```3 * "4"```. The answer will be a number of 12.

*  To remember which values are truthy and which are falsey, just memorize the five falsey values ```undefined, null, 0, "” and NaN``` and remember that everything else is truthy.

* [] = truthy,
  {} = truthy,
  {name:null} and passing the proprty name will give it null and thus falsey,
  [0] = falsey, if the element [0[ doesn't exist , ie if the array was an empty array from the
  start
  
## Chapter 9:

* An event is an activty that happens inside the web page, which is performed by the browser. However, if you want to control it . you need to specify code for a particular event and this
gives your code an oppertunity to handle the event. All the other events are handled by the browser.

* An event handler is a function that handles an event. When an event occurs , the function handling that particular event is called.

* We can set the src of a variable ```image``` containing the reference to an image by using ```image.src```.

* ```getElementByTagName``` owrks just like ```getElementById``` except that it returns an element after trying to match that element by its HTML tag. 

* Here ,```getElementsByTagName``` is used which returns an object of images. However , we can use those images by looping them with a for loop by iterating them as an array like procedure,
which is ```images.length```.

* We can use a single event handler function for many elements. However , for each element in this case , we are writing the function "showUnblurred" again so as to change its image to the unblurred version.

* THe HTML element at which the event occurs is called as the ```target```
The ```target``` is a property of the event object

* When an event happens , an event object is created. It contains all the details of the event and it is passed to the event handler.

* to loop through multiple events:
```
function pageLoadEvent() {
  let images = document.getElementsByTagName("img");
  // console.log(images);
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", showUnblurred);
  }
}
window.onload = pageLoadEvent;

function showUnblurred(eventObject) {
  let image = eventObject.target;
  let idName = image.id;
  idName = idName + ".jpg";
  image.src = idName;
}
```
* ```clientX``` , ```clientY``` are used to find the co-ordinates of an element in the html page.
These are methods of the event object. You can use them in the given manner:
```x = eventObject.clientX;
   y = eventObject.clientY;
   ```
* Other methods used to find the coordinates are:
1. ```pageX , pageY```
2  ```screenX , screenY```

* Using ```setTimeout()``` event: 
You can use this function in such a way that the event handler is defined with what you need to do after the required time , then call setTimeout using the event handler , outside that event handler funtion.

```
function testTimeout() {
  alert("What on earth are you doing looking at the screen!");
}
setTimeout(testTimeout, 5000);
```
* ```setInterval``` is used to run the event handler function as many as times you want , after the specified interval defined in the set interval function.

You can stop the ```setInterval``` function because it returns a timer object.If you pass the timer object to a ```clearInterval``` function , it stops.

``` 
let test = true;
function testsetInterval() {
  if (test) {
    console.log("tick");
    test = false;
  } else {
    console.log("tock");
    test = true;
  }
}
setInterval(testsetInterval, 1000);
``` 
The event listeners used here are:

1. ```click```
2. ```mousemove```
3. ```keypress```

## Chapter 10:

* functions can also be represented as 
```let func = function(num) {
   for(let i = 0; i < num; i++) {
      console.log("yo");
   }
  }
func(5);
```
Here , the function is called by the varaible type function is being reffered to.
This is a function expression.

* The browser goes through the code to firstly look for function declarations and then then stores them away in a refrence varible with which it can be called later on when the function is called.

* A usal expressipn ```3+4 = 7``` evaluates to 7 , a value. Likewise, a  function expression evalutes to a function reference.

* In the case of , function expressions , the functions are created during thr execution of the code. However , function declerations are reffered to a variable at the begining when the browser checks the code at first view.
Secondly, the function expression doesn't provide a name to the function itself. The vaiable it is assigned to is used to for calling , returning values etc.

* It doesn't matter how you create functions , but the varible in function declerations and that in function expression , both contain a refernce to the function itself. Hence it can be regarded as a value  , an can be assigned on to other variables which can be used to call them.

eg: 

* We need to treat a function like a value

* We can call functions inside other functions . eg:
```
function getName(name) {
  console.log(name);
}
getName("armaan");

function boo(noni) {
  noni("rehaan");
}
getName(boo);
```


* In some cases , we can use a function to call another function and we can also return a functon just like we return a value.

eg: In the case of an array of objects ,where each object contains the details of a customer, then we can use this an as an option for better code.

```
var passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "Dr. Evel", paid: true, ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "firstclass" },
  { name: "John Funcall", paid: true, ticket: "coach" },
];

function createDrinkOrder(passengers) {
  let orderFunctioon;
  if (passengers.ticket === "firstclass") {
    orderFunctioon = function () {
      console.log("We offer wine and cocktails");
    };
  } else {
    orderFunctioon = function () {
      console.log("We offer coke and water");
    };
  }
  return orderFunctioon;
}

function serveCustomerpakage(passengers) {
  let getOrderFunction = createDrinkOrder(passengers);
  //before breakfast
  getOrderFunction();
  //beforelunch
  getOrderFunction();
  //evening
  getOrderFunction();
}

function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomerpakage(passengers[i]);
  }
}
servePassengers(passengers);
```
## Chapter 11:

* Anonymous functions are those functions which doesnt have a name

* To use an anonymous function in the case of window.onload method() , we remove the fucntion name of the function decleration and them dirrectly assign the function to the window.onload method.

eg:
```
window.onload = function () {
  alert("Everythig is good");
};
```

* Another example in setTimeout:

```
setTimeout(function () {
  alert("The cookies are done baking! Time to get them out of the oven");
}, 6000);
```
* Basically , we use anonymous functions to save function names  In other words , we use them in cases where the function needs to be run only once.

* In the case of function declarations , they can be defined at any part of the program , as fucntion declerations get already saved to a refrence varibale by the browser during it's first pass. They can also be called anywhere as well and won't throw an error.

However , function expressions cannot be called or defined in such a manner as they are evaulated only in the second pass of the code by the browser. Hence , we need to make sure that the function is called only after the function definition , otherwise it will throw a reference error.

eg:

```
name("Armaan");
let name = function (myName) {
  console.log(`My name is ${myName}`);
};
```
Here , there will be reference error as the function expression is  called before its defintion. Hence the function call will be evaluated first and it will be undefined.

* Functions defined at the top level of your code have global scope, whereas functions defined within another function have local scope. 

* Within a function, if you define a nested function with a declaration, that nested function is defined everywhere within the body of the function. On the other hand, if you create a nested function using a function expression, then that nested function is defined only after the function expression is evaluated.

* Lexical just means you can determine the scopr of the variable just by reading the structure of the code and not waiting for the whole code to finish executing.

* In the below case , we use lexical scope , ie the function when called will look for the myName variable with the nearest scope. Hence it will return the one in the local scoope.

```let myName = "Armaan";
function name() {
  let myName = "Rehaan";
  return myName;
}
console.log(name());
```
* When you return an inner function , it returns the function body as well as the environment it is linked to.
If you have a function that is returned from within a function, it carries its environment around with it.
 
 eg:
 
 ```
 let name = "Armaan";
function oldName() {
  let name = "Rehaan";
  function newName() {
    return name;
  }
  return newName();
}
let newValue = oldName();
console.log(newValue);
``` 
When you return newName() , it carries with it the variable ```name = "Rehaan"``` , as it
belongs to the function environment.

* Free varibales are those whicha are not defined inside the function.
* Closures:


## Chapter 12:

* Object cinstructors are used to create many objects of the similar type. It comes in handy during the creation of objects in bulk of the same type , with different properties.
eg: Different varieties of cars of the same company

* A constructor is quite similar to a function that returns an object: you define it once and invoke it every time you want to create a new object

* For the object ,
```
let dog = {
  name: "Fido",
  breed: "Mixed",
  weight: 38,
};
``` 
A constructor can be created as  , 

```
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
```
This the syntax of a constructor

* In order to use the constructor , we use the ```new``` keyword . Also, as a convention, start constructor names with a capital letter.
It is given by the following example:

 ```new Dog("Peggy", "basset hound", "38");```
 Lets make it```let peggy = new Dog("Peggy", "basset hound", "38");```
 In this case, the variable ```peggy``` has the reference to this object. 
 Remember that new first creates a new object before assigning it to this (and then calling your constructor function). If you don’t use new, a new object will never be created.
 
 * The way the contructor is created is :
 1.The first thing new does is create a new, empty object:

 2.Next, new sets ```this``` to point to the new object

 3.With ```this``` set up, we now call the function Dog,while passing in new arguments to its properties just like we do while calling a function.
 
 4.Finally, once the Dog function has completed its execution the new operator returns ```this```, which is a reference to the newly created object. Notice this is returned for you. You don’t have to explicitly return it in your code. And after the new object has been returned, we assign that reference to the variable ```peggy```.

* In cases of many parameters in the constructor , there will be many arguments when we define and object as well and  hence it will be difficult to read the code. Hence we use a single parameter in the constructor and we pass the arguemnts into the constructor as an object. As a result ,the code becomes a lot more cleaner.

* The objects created in the constructor by using the ```new``` keyword are instances of the Constructor.

* Using ```instanceof``` operator will allow us to check if the varible to which a new object to be created into the constructor is reffered to is an instance of that constructor.

eg:
```
if (cadi instanceof Car) {
console.log("Congrats, it's a Car!");
};
```
* Always use ```instanceof``` oeprator to check if an object is an instance of a particular constructor.

eg: 

```
function dogCatcher(obj) {
  if (obj instanceof Dog) {
    return true;
  } else {
    return false;
  }
}
```
* The ```new Date()``` is used to create an object with the current date and times.
You can get specific info from that object like ,
```let now = new Date() 
   let mydate = now.getFullYear()
```
   
   This ```getFullYear()``` returns the year property's value in the Date object.
   
 * You can convert the Date object data into string by using ```toString```,
 eg:
 
 ```let now = new Date() 
   let mydate = now.getFullYear()
   mydate = now.toString()
   ```
   
* To create an array using the ```new``` keyword ,  ```let newArray = new Array(3)``` .
Here , we create an array with size 3.

You can later add elements to it the usual way:

```newArray[0] = 5;
  newArray[1] = 12;
  ```


* Using the ```every()``` , you can check every element of an array and it will return true or false for the defined condition. 

```let result = newArray.every(function (x) {
  return x % 5 === 0;
  });
  ```
