// function myFunction() {
//     return "Hello";
// }
// console.log(myFunction());

//using async

// async function myFunction() {
//     // return "Hello";
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello"), 2000);
//     });
//     let error = true;
//     if (error === false) {
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error("There is an error")); //waht on earth is this?
//     }

// const res = await promise;
// return res; //here , the await makes the promise to wait until the process is done
// }
// myFunction()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

async function myFunc() {
    //here , JS waits until all the data has been fetched and stored to the variable "response"
    const response = await fetch(`http://jsonplaceholder.typicode.com/users`);
    //here , JS waits until all the .json() values have been collected and stored to the variable "data"
    const data = await response.json();
    //only after these processes are done , the value from data is returned. ie after the promises are complete.
    return data;
}
myFunc().then((res) => console.log(res));
