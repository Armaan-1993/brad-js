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

//model objecf

let model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [
    { location: ["10", "20", "30"], hits: ["", "", ""] },
    { location: ["32", "33", "34"], hits: ["", "", ""] },
    { location: ["63", "64", "65"], hits: ["", "", "hit"] },
  ],
  // fire: function (guess) {
  //   for (let i = 0; i < this.ships.length; i++) {
  //     for (let j = 0; j < this.ships.length; j++) {
  //       if (this.ships[i].location[j] === guess) {
  //         this.ships[i].hits[j] = "hit";
  //         displayHit = true;
  //       } else {
  //         displayHit = false;
  //       }
  //     }
  //   }
  // },
  fire: function (guess) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      let index = ship.location.indexOf(guess);
      // console.log(index);
      //indexOF() method returns the required index of the element and returns -1 if thst element
      //does not exit in the array
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("Hit!!");
        if (this.isSunk(ship) === true) {
          this.shipsSunk++;
          view.displayMessage("You Sunk my Battleship!!");
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You Missed!");
    return false;
  },
  isSunk: function (ship) {
    for (let i = 0; i < this.ships.length; i++) {
      // let ship = this.ships[i];
      if (ship.hits[i] === "hit") {
        return true;
      }
    }
    return false;
  },
};

// let ship1 = ships[1];
// let hits = ship1.location;
// console.log(hits[2]);

model.fire("65");

//controller
let controller = {
  guesses: 0,
  parseGuesses: function (guess) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
      alert("Please enter the correct number to play the game!");
    } else {
      let firstChar = guess.charAt(0); //charAt is used to return a string at a required position as it's argument
      let row = alphabet.indexOf(firstChar);
      let column = guess.charAt(1);
      if (
        isNaN(row) === true ||
        row >= model.boardSize ||
        isNaN(column) === true ||
        column >= model.boardSize
      ) {
        alert("Please enter the guesses again!");
      } else if (row < 0 || column < 0) {
        alert(
          "Those number are not on the board and they are too small. Please re-enter"
        );
      } else {
        return row + column;
        // console.log(row + column);
      }
    }
    return null;
  },
};
// controller.parseGuesses("A5");
// controller.parseGuesses("W9");
// controller.parseGuesses("H0");
// controller.parseGuesses("A7");
