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
    //remove tasks
    taskList.addEventListener("click", removeItem);
    //clear tasks
    taskList.addEventListener("click", clearTasks);
    //filter
    filter.addEventListener("keyup", filterTasks);
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
    // console.log(li);

    //clear input

    taskInput.value = "";
    e.preventDefault();
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure?")) {
            //confirm statement for yes or  no
            e.target.parentElement.parentElement.remove();
        }
    }
    // console.log(e.target);
}

function clearTasks() {
    //clear tasks using inner html
    taskList.innerHTML = "";
    //clear tasks using while loop (faster)
    while (taskList.firstChild) {
        //if a first child exists
        taskList.removeChild(taskList.firstChild);
    } //why no iteration is used here?
}

//filter function

function filterTasks(e) {
    // console.log(e.target);
    const text = e.target.value.toLowerCase();
    // console.log(text);
    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block"; //to display the element
        } else {
            task.style.display = "none"; //hide it
        }
    }); //we use for each here since query selector returns a node list. If we use getelementbyclass here, it will return an html collecti0on and we would have to convert them to array so as to use foreach
}
