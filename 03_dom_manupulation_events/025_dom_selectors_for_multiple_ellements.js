// const items = document.getElementsByClassName("collection-item");

// console.log(items);
// console.log((items[0].innerHTML = '<li style = "color:green">yo</li>'));

// console.log(
//     (document.getElementsByClassName("collection-item")[0].style.color =
//         "green")
// );
// console.log((items[3].textContent = "green"));

// let myItems = document
//     .querySelector("ul")
//     .getElementsByClassName("collection-item");
// console.log(myItems);

//get elements by tag name
let items = document.getElementsByTagName("li");
// console.log(items);
// console.log((items[0].style.color = "green"));
// console.log((items[0].textContent = "wadddup"));
// // console.log((items[3].textContent = "green"));
// console.log((items[3].textContent = "wadddup"));

//reverse

// let myArray = Array.from(items);

// myArray = myArray.reverse();
// console.log(myArray);

// myArray.forEach(
//     (func = (li, index) => {
//         console.log(`${index} hello`);
//         // console.log((li.textContent = "yo"));
//     })
// );
// console.log(myArray);

// items = document.querySelectorAll("ul.collection li.collection-item");
// items.forEach(
//     (func = (item, index) => {
//         console.log(`${index} hello`);
//         // console.log(items);
//         item.textContent = "wadddup";
//     })
// );

// console.log(items);

let lisOdd = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < lisOdd.length; i++) {
    console.log((lisOdd[i].style.background = "red"));
}
let lisEven = document.querySelectorAll("li:nth-child(even");
lisEven.forEach(
    (func = (li) => {
        li.style.background = "green";
    })
);
