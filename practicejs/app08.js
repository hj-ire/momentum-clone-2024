const h1 = document.querySelector(".hello:first-child h1");

//choose which event you want to listen
function handleTitleClick() {
  const clickedClass = "clicked"; //save your string!
  h1.classList.toggle("clicked"); //toggle is a switch on/off
}

h1.addEventListener("click", handleTitleClick);
