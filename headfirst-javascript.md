
Notes:

 Chapter 1;
* varible names = small letter or _. However , one musn't use _ unless really necessary . Use camel casing instead 
* page 15 (doubt);


# Chapter 2:

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
