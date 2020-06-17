// //document.getelement by id

// let val;

// val = document.getElementById("task-title");

// val = document.getElementById("task-title").id;

// val = document.getElementById("task-title").className;
// val = document.getElementById("task-title").style.background = "#333";
// val = document.getElementById("task-title").style.color = "#fff";
// val = document.getElementById("task-title").style.padding = "5px";
// val = document.getElementById("task-title").style.margin = "5px";
// // val = document.getElementById("task-title").style.display = "none";

// val = document.getElementById("task-title").textContent = "Task";
// val = document.getElementById("task-title").innerText = "Task1";
// val = document.getElementById("task-title").innerHTML =
//     '<span style = "color:red" >Yooo</span>';
// val = document.getElementById("task-title").innerHTML =
//     '<div style = "color:green">wadduppp</div>';

// let myTitle = document.getElementById("task-title");
// myTitle.innerText = "Task1";

// myTitle.innerHTML = '<section style = "color : yellow">dueeee</section>';

// console.log(val);

console.log((document.querySelector("#task-title").style.color = "green"));
console.log((document.querySelector(".container").style.background = "blue"));
console.log((document.querySelector("li").style.color = "red"));
console.log((document.querySelector("li:last-child").style.color = "green"));
console.log(
    (document.querySelector("li:nth-child(3)").style.background = "yellow")
);
