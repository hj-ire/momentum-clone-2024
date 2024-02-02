//document means HTML
//getElementsById --> you can bring ID/Class etc...
const h1 = document.querySelector(".hello:first-child h1");
//you can search CSS way using selector

h1.innerText = "Click me!";
console.dir(h1); //object start with "on" <- you can create events

//choose which event you want to listen
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

//Don't use CSS on JS!!
