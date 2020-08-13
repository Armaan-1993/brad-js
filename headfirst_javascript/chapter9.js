// function pageLoadEvent() {
//   alert("I am alive since the DOM has finished being loaded by the browser!");
// }
// window.onload = pageLoadEvent;

function loadImage() {
  let image = document.getElementById("zeroBlurred");
  image.addEventListener("click", showUnblurred);
}
window.onload = loadImage;

function showUnblurred() {
  let image = document.getElementById("zeroBlurred");
  image.src = "img/zero.jpg";
}
