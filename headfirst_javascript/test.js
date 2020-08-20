let passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "Dr. Evel", paid: true, ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "firstclass" },
  { name: "John Funcall", paid: true, ticket: "coach" },
];

function createDrinkOrder(passenger) {
  if (`${passenger.ticket} === "firstclass"`) {
    console.log("Would you like a cocktail or wine");
  } else {
    console.log("Your choice is Cola or Water");
  }
}

function serveCustomer(passenger) {
  createDrinkOrder(passenger);
  // get dinner order
  createDrinkOrder(passenger);
  createDrinkOrder(passenger);
  // show movie
  createDrinkOrder(passenger);
  // pick up trash
}
