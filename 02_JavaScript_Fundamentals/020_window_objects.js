//WINDOW - MTHODS and OBJECTS

// console.log(123);

// //Alert:

// window.alert("yo waadup");

//prompt;

// const input = prompt();
// alert(input);

// const myInput = prompt();
// alert(myInput);

//confirm

// if (confirm("Are you sure?")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

//PROPERTIES:

let val;

//inner height
val = window.innerHeight;
val = window.innerWidth;

//outer height
val = window.outerHeight;
val = window.outerWidth;

//scroll x and y

// val = window.scrollY;
// val = window.scrollX;

//location object

val = window.location;
val = window.location.hostname;
val = window.location.href;
val = window.location.port;
val = window.location.search;

//redirect

// window.location.href = "http://www.google.com";
//redirect:
// window.location.reload();

// console.log(val);

//history object:

// window.history.go(-2);
// val = window.history.length;

//naviagtor

val = window.navigator;
val = window.navigator.appCodeName;
val = window.navigator.appVersion;
val = window.navigator.geolocation;

console.log(val);
