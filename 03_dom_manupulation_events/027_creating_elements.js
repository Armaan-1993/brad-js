//create element

let li = document.createElement("li");

// add class

li.className = "my-element";
li.id = "my-newelement";

//add attribute

li.setAttribute("title", "new-item");

//appedoing text to the child element

li.appendChild(document.createTextNode("title"));

//appeding link

let link = document.createElement("a");

link.className = "delete-item secondary-content";

//adding the i tag inside the a tag as i is within the a tag
link.innerHTML = '<i class="fa fa-remove"></i>';

//adding this link to li

li.appendChild(link);

//appeding the created li element into ul.

document.querySelector("ul.collection").appendChild(li);

console.log(li);
