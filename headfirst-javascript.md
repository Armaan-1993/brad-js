
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
Here, we are not calling the function ```init```. We are just assigning the function to windows.onload property , so as to load it after the DOM has been bulit.

* 
