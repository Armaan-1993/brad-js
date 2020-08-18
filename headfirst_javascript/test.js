function createDrinkOrder() {
  if (`${passengers.ticket} = "firstclass"`) {
    console.log("WE serve cocktail and wine");
  } else {
    console.log("We serve water");
  }
}

function serveCustomer(passenger) {
  createDrinkOrder(passenger);
  // get dinner order
  createDrinkOrder(passenger);
  createDrinkOrder(passenger);
  // show movie

  createDrinkOrder(passenger);
}
// pick up trash
