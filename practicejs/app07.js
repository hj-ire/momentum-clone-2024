const h1 = document.querySelector(".hello:first-child h1");

//choose which event you want to listen
function handleTitleClick() {
  const clickedClass = "clicked"; //save your string!
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass) = "";
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);
