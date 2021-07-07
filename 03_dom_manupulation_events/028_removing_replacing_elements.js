// Replace element

const newHeader = document.createElement("h2");
console.log(newHeader);

//add id and new class name

newHeader.className = "header-class";
newHeader.id = "header-id";

//new text

newHeader.appendChild(document.createTextNode("h2-text"));

//get the old h5

const oldHeading = document.getElementById("task-title");

//get the parent of h5

const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeader, oldHeading);

document.querySelector("#header-id").textContent = "New Heading";

// Remove element

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove();
lis[1].remove();

//using removeChild

list.removeChild(lis[2]);

//classes and attributes

const firstli = document.querySelector("li:first-child");

// console.log(firstli);

const link = firstli.children[0];
console.log(link);
let val;

val = link.className; // shows the list of classes it has
val = link.classList; //this gives a list which is not an array but looks like an array

val = link.classList[0];
val = link.classList.add("test");
val = link.classList.remove("test");

//attributes

val = link;

val = link.getAttribute("href"); //get the attribute
val = link.setAttribute("href", "http://www.google.com"); //set attribute

val = link.hasAttribute("title");
val = link.hasAttribute("href"); // check if there is an attribute

//to add attribute to "title"
val = link.setAttribute("title", "http://www.facebook.com"); //
val = link;

val = link.hasAttribute("title");
val = link.removeAttribute("title");

console.log(val);
