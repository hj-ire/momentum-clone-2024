//document means HTML
//getElementById --> you can bring ID/Class etc...
const h1 = document.querySelector(".hello:first-child h1");
//you can search CSS way using selector

h1.innerText = "Click me!";
console.dir(h1); //object start with "on" <- you can create events
h1.style.color = "blue";

//choose which event you want to listen
function handleTitleClick() {
  //()empty to play JS not immediately
  console.log("The h1 was clicked");
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("Copy Cat!!");
}
function handleWindowOffline() {
  alert("SoS No WIFI!!!");
}
function handleWindowOnline() {
  alert("You are Online!");
}
h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//.removeEventListener you can remove with this code

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
