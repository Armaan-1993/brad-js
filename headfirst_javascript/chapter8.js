//making an app

//the main view object
let view = {
  displayMessage: function (msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

// view.displayHit("02");
// view.displayMiss("66");

//ships
let ships = [
  { location: ["10", "20", "30"], hits: ["", "", ""] },
  { location: ["32", "33", "34"], hits: ["", "", ""] },
  { location: ["63", "64", "65"], hits: ["", "", "hit"] },
];

// let ship1 = ships[1];
// let hits = ship1.location;
// console.log(hits[2]);
