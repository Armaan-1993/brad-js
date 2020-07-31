
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
