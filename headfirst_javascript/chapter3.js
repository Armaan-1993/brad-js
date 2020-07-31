// function bark(name, weight) {
//     if (weight > 20) {
//         alert("The dog with the name " + name + " says WOOF WOOF");
//     } else {
//         alert("The dog with the name " + name + " says woof woof");
//     }
// }
// bark("Milo", 37);
// bark("Rover", 17);
// bark("Spike", 37);
// bark("Lady", 0, 0); //it will yeild woof woof

//passign any type of arguments to function

// function brad(name, age, cgpa, condition) {
//     let name = name;
//     let age = age;
//     let cgpa = cgpa;
//     let condition = condition;
// }
// brad("susan", 50, 9.1, true);

// function bark(name, weight) {
//     if (weight > 20) {
//         alert("The dog with the name " + name + " says WOOF WOOF");
//     } else {
//         alert("The dog with the name " + name + " says woof woof");
//     }
// }
// bark(20);

// function bake(degrees) {
//     let message = "";
//     if (degrees > 500) {
//         message = "The temperture is too high";
//     } else if (degrees < 100) {
//         message = "The temperature is too low";
//     } else {
//         message = "This is the ambient temperture";
//     }
//     setMode("bake");
//     setTemp(degrees);
//     return message;
// }
// let status = bake(360);

// let radius = 51;
// let area = areaOfCircle(radius);
// alert("The area of the circle is " + area);

// function areaOfCircle(radii) {
//     let areaValue = Math.PI * (radii * radii);
//     return areaValue;
// }

// page 110 program:

function clunk(times) {
    let num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}
function thingamajig(size) {
    let facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}
function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}
let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
