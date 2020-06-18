const clearBtn = document.querySelector(".clear-task");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//click
// clearBtn.addEventListener("click", clickOne);

// function clickOne(e) {
//     console.log(`EVENT TYPE ${e.type}`);
// }

//mouseover

// clearBtn.addEventListener("mouseover", clickOne);

// clearBtn.addEventListener("dblclick", clickOne);

// function clickOne(e) {
//     console.log(`EVENT TYPE ${e.type}`);
// }

// clearBtn.addEventListener("dblclick", clickOne);

//mousedoen

// clearBtn.addEventListener("mousedown", clickOne);

//mouseup

clearBtn.addEventListener("mouseup", clickOne);
//so that the mouse enter is active only when the mouse pointer enters the class card , which is main.s
//mouseenter

card.addEventListener("mouseenter", clickOne);

//mouseleave; It is the vice versa of card enter
card.addEventListener("mouseleave", clickOne);
//mouseover

// card.addEventListener("mouseover", clickOne);

// card.addEventListener("mouseout", clickOne);
// function clickOne(e) {
//     console.log(`EVENT TYPE ${e.type}`);
// }

card.addEventListener("mousemove", clickOne);

// function clickOne(e) {
//     console.log(`EVENT TYPE ${e.type}`);

// }
function clickOne(e) {
    // console.log(`EVENT TYPE ${e.type}`);
    heading.textContent = `MOUSE X : ${e.offsetX} MOUSE Y : ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX} ,${e.offsetY} ,70)`;
}
