// function pageLoadEvent() {
//   alert("I am alive since the DOM has finished being loaded by the browser!");
// }
// window.onload = pageLoadEvent;

// function loadImage() {
//   let image = document.getElementById("zeroBlurred");
//   image.addEventListener("click", showUnblurred);
// }
// function loadImage() {
//   let image = document.getElementById("oneBlurred");
//   image.addEventListener("click", showUnblurred);
// }
// function loadImage() {
//   let image = document.getElementById("twoBlurred");
//   image.addEventListener("click", showUnblurred);
// }
// function loadImage() {
//   let image = document.getElementById("threeBlurred");
//   image.addEventListener("click", showUnblurred);
// }
// function loadImage() {
//   let image = document.getElementById("fourBlurred");
//   image.addEventListener("click", showUnblurred);
// }
// function loadImage() {
//   let image = document.getElementById("fiveBlurred");
//   image.addEventListener("click", showUnblurred);
// }
// window.onload = loadImage;

// function showUnblurred() {
//   let image = document.getElementById("zeroBlurred");
//   image.src = "img/zero.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("oneBlurred");
//   image.src = "img/one.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("twoBlurred");
//   image.src = "img/two.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("threeBlurred");
//   image.src = "img/three.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("fourBlurred");
//   image.src = "img/four.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("fiveBlurred");
//   image.src = "img/five.jpg";
// }

//alternate method
// function pageLoadEvent() {
//   let images = document.getElementsByTagName("img");
//   // console.log(images);
//   for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", showUnblurred);
//   }
// }
// window.onload = pageLoadEvent;
// function showUnblurred() {
//   let image = document.getElementById("zeroBlurred");
//   image.src = "img/zero.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("oneBlurred");
//   image.src = "img/one.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("twoBlurred");
//   image.src = "img/two.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("threeBlurred");
//   image.src = "img/three.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("fourBlurred");
//   image.src = "img/four.jpg";
// }
// function showUnblurred() {
//   let image = document.getElementById("fiveBlurred");
//   image.src = "img/five.jpg";
// }

// function eventHandler(eventObject) {
//   let element = eventObject.target;
//   console.log(element);
// }

//image load game

// function pageLoadEvent() {
//   let images = document.getElementsByTagName("img");
//   // console.log(images);
//   for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", showUnblurred);
//   }
// }
// window.onload = pageLoadEvent;

// function showUnblurred(eventObject) {
//   let image = eventObject.target;
//   let idName = image.id;
//   idName = idName + ".jpg";
//   image.src = idName;
// }
// //
