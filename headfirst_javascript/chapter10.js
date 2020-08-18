// let func = function (num) {
//   for (let i = 0; i < num; i++) {
//     console.log("waddup");
//   }
// };
// func(5);

// let winner = function () {
//   console.log("Winner!");
// };
// let loser = function () {
//   console.log("Loser!");
// };
// winner();
// let a = winner;
// let b = loser;
// let c = loser;
// a();
// b();
// c = a;
// a = b;
// b = c;
// c = a;
// a = c;
// a = b;
// b = c;
// a();

// let passengers = [
//   { name: "Jane Doloop", paid: true },
//   { name: "Dr. Evel", paid: true },
//   { name: "Sue Property", paid: false },
//   { name: "John Funcall", paid: true },
// ];
// function checkNoFlyList(passengers) {
//   for (let i = 0; i < passengers.length; i++) {
//     if (passengers[i].name !== null) {
//       console.log(`${passengers[i].name} is in the fly list`);
//     } else {
//       console.log(`${passengers[i].name} is in the no-fly list`);
//     }
//   }
// }

// function checkNotPaid(passengers) {
//   for (let i = 0; i < passengers.length; i++) {
//     if (passengers[i].paid === true) {
//       console.log(`${passengers[i].name} is a paid passenger`);
//     } else {
//       console.log(`${passengers[i].name} is not a paid passenger`);
//     }
//   }
// }

// checkNoFlyList(passengers);
// checkNotPaid(passengers);

// let passengers = [
//   { name: "Jane Doloop", paid: true },
//   { name: "Dr. Evel", paid: true },
//   { name: "Sue Property", paid: false },
//   { name: "John Funcall", paid: true },
// ];

// function processPassengers(passengers, testFunction) {
//   for (let i = 0; i < passengers.length; i++) {
//     if (testFunction[passengers[i]] === true) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkNoFlyList() {
//   return passenger.name === "Dr Evan"; // this means this function will true if the passenger.name
//   //is equal to "Dr Evan"
// }
// function checkNotPaid(passenger) {
//   return passenger.paid; //returns true if passenger.paid is true
// }
// let isOnFlyList = processPassengers(passenger, checkNoFlyList);
// if (!isOnFlyList) {
//   console.log(
//     "The flight cannot take off as the passenger are in the no fly list"
//   );
// }

// let isPaid = processPassengers(passenger, checkNotPaid);
// if (isPaid === false) {
//   console.log("The passengers havn't paid for the flight");
// }

let passengers = [
  { name: "Jane Doloop", paid: true },
  { name: "Dr. Evel", paid: true },
  { name: "Sue Property", paid: false },
  { name: "John Funcall", paid: true },
];

// function printPassenger() {
//   console.log(`The passenger is ${passengers.name}`);
// }

// function processPassengers(passengers, printPassenger) {
//   if (passengers) {
//     printPassenger;
//   }
// }

// processPassengers(passengers, printPassenger);

// function printPassenger(passenger) {
//   var message = passenger.name;
//   if (passenger.paid === true) {
//     message = message + " has paid";
//   } else {
//   }
//   message = message + " has not paid";
//   console.log(message);
// }
// return false;
// processPassengers(passengers, printPassenger);

// function getName(name) {
//   console.log(name);
// }
// getName("armaan");

// function boo(noni) {
//   noni("rehaan");
// }
// getName(boo);

//today
// function age(myage) {
//   console.log("MY age is " + myage);
// }
// age(26);

// function name(myname) {
//   console.log(myname + " is Armaan");
// }
// // age(name);
// name(age);
// function name(myname) {
//   myname("Armaan");
// }
// // name(age);
// age(name);

// var passengers = [
//   { name: "Jane Doloop", paid: true, ticket: "coach" },
//   { name: "Dr. Evel", paid: true, ticket: "firstclass" },
//   { name: "Sue Property", paid: false, ticket: "firstclass" },
//   { name: "John Funcall", paid: true, ticket: "coach" },
// ];
// function serveCustomerpakage() {
//   //drinks
//   //dinner order
//   //pickup thrash
// }

function serveDrinks() {
  if (`${passengers.ticket} = "firstclass"`) {
    console.log("WE serve cocktail and wine");
  } else {
    console.log("We serve water");
  }
}

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
