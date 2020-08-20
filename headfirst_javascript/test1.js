let passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "Dr. Evel", paid: true, ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "firstclass" },
  { name: "John Funcall", paid: true, ticket: "coach" },
];

function createDrinkOrder(passenger) {
  let orderFunctioon;
  if (passenger.ticket === "firstclass") {
    orderFunctioon = function () {
      console.log("Would you like a cocktail or wine");
    };
  } else {
    orderFunctioon = function () {
      console.log("Your choice is Cola or Water");
    };
  }
  return orderFunctioon;
}

function serveCustomerpakage(passenger) {
  let getOrderFunction = createDrinkOrder(passenger);
  //before breakfast
  getOrderFunction();
  //beforelunch
  getOrderFunction();
  //evening
  getOrderFunction();
}

function servePassengers(passenger) {
  for (let i = 0; i < passenger.length; i++) {
    serveCustomerpakage(passenger[i]);
  }
}
servePassengers(passengers);
