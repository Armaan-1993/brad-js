//"try" block lets us write code and test for errors while the catch block lets us handle those errors
//We can alos throw our own errors
// The usefull thing about try and catch is that it will let us catch the errors , decide what to do with them and the resume with the execution of the rest of the code. Thts how this works
const data = { email: "armaanmathew88@gmail.com" };
try {
    //this will produce  a reference error as the function is not defined
    //producing reference error
    // myFunction();
    //producing type error
    // null.myfunc();

    //syntax error
    // console.log(eval("4+4")); //eval is used to evaluate javascript within the brackets. It In this case, we have given it is a string , but the function converts this into numbers and gives us a result.
    // console.log(eval(`Hello World`)); //in this case , js converts the strings hello and world into varibles and check them. Since they are not defiend , they will throw an error saying "unexected identifier". However , in the case of eval(`"Hello World"`) , it would have consoled the output as "Hello World"

    if (!data.name) {
        // throw "There is no property called name in this object";
        throw new SyntaxError("data object has no property named name"); //to display a type of error using throw
    }
} catch (e) {
    // console.log(e);

    console.log(e.message); //if you wana just display "function is not defined" , ie the error message and not the entire error message including the type of error , error message etc
    console.log(e.name); //gives the type of error
    console.log(e instanceof ReferenceError); //to check if a type of error is true or not
    console.log(e instanceof TypeError); //this yeilds false as the type of error here is Reference Error
} finally {
    console.log("No I can run whatever i want..");
} //using finally can make the code within it run no matter what the condition is

console.log("The Program continues..");
