// document.querySelector(".clear-task").addEventListener("click", function (e) {
//     console.log("hello");
//     e.preventDefault; //prevent default behaviour
// });
// document.querySelector(".clear-task").addEventListener("click", onclick);

// function onclick(e) {
//     console.log("Clicked");
//     // e.preventDefault;
// }
// document.querySelector(".collection-item").addEventListener("click", onClick);

// function onClick(e) {
//     // console.log("wadddup");
//     val = e;
//     console.log(val);
// }
document.querySelector(".clear-task").addEventListener("mouseover", onclick);

function onclick(e) {
    console.log("Clicked");
    // e.preventDefault;
    let val;
    val = e;
    val = e.target; //gives the target of the href which is the target to the e function
    val = e.target.className;
    val = e.target.classList;
    // console.log(val);
    e.target.innerText = "waddudpp"; //chnages the inner text

    //event type
    val = e.type;

    // cordinates relative to event window

    val = e.clientX;
    val = e.clientY;

    //cordinates relative to event element

    val = e.offsetX;
    val = e.offsetY;
    console.log(val);
}
