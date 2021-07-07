let list = document.querySelector("ul.collection");
let listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

val = list.childNodes;
val = list.children;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;
val = list.childNodes;
// val = list.childNodes[3].nodeType;
val = list.children[1];
val = list.children[0];
val = list.children[0].children;
val = list.children[3].children.id = "test-link";

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;
//parent node

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get siblings
//next
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling;

//previous sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling.previousElementSibling;
console.log(val);
