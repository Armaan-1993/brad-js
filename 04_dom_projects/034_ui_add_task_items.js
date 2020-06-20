//Defining UI elements
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//To load all event listeners

loadEventListener();
//to load all event listeners
function loadEventListener() {
    // using event listener and using a function "addTask"
    form.addEventListener("submit", addTask);
}

function addTask(e) {
    //we need to use an "e" here , since we need to use the event handler here ask add task is the function that add tasks
    if (taskInput.value === "") {
        alert("You need to input a value");
    }
    //create an li element
    const li = document.createElement("li");
    li.className = "collection-item";

    //Add text to the element

    li.appendChild(document.createTextNode(taskInput.value));

    //create link

    const link = document.createElement("a");

    //add class to link

    link.className = "delete-item secondary-content";
    // add <i> into link
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    //append link to <li>
    li.appendChild(link);
    //append li to to ul
    taskList.appendChild(li);

    //clear input

    taskInput.value = "";
    e.preventDefault();
}
