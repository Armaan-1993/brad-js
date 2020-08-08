let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function () {
        if ((this.fuel = 0)) {
            console.log("No fuel bro");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Vroom Vroom");
            } else {
                console.log("We need to stop the engine as the fuel is slow");
            }
        } else {
            console.log("You need to start your engine first");
        }
    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    },
};

// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.stop();

// fiat.start();
// fiat.drive();
// fiat.addFuel(2);
// fiat.start();
// fiat.drive();
// fiat.drive();
// fiat.drive();
// fiat.stop();

// for (let prop in fiat) {
//     console.log(prop);
// }

for (let prop in fiat) {
    console.log(prop + ":" + fiat[prop]);
}

// fiat["wheel"] = "Bridgestone";
// console.log(fiat);
//yo