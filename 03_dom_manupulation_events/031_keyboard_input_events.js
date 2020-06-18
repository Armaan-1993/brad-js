const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//     console.log(`TYPE ${e.type}`);
//     e.preventDefault;
// }

//to clear input (here , value is used)

// taskInput.value = "";

//keydown
// form.addEventListener("keydown", runEvent);

//keyup

// form.addEventListener("keyup", runEvent);

//keypress

// form.addEventListener("kepress", runEvent);

// function runEvent(e) {
//     console.log(`TYPE ${e.type}`);
//     console.log(e.target.value); //simultaneoulsy takes the input entered , via value
//     // e.preventDefault;
//     // heading.textContent = e.target.value;
// }

taskInput.addEventListener("focus", runEvent);

function runEvent(e) {
    console.log(`Event ${e.type}`);
}
