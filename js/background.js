const images = ["0.jpeg", "1.jpg", "2.jpeg", "3.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// document.body.style.backgroundImage = `url(img/${chosenImage})`;
// document.body.style.backgroundPosition = "top";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundAttachment = "fixed";
// document.body.style.backgroundImage = `url(img/${chosenImage})`;
// document.body.style.backgroundPosition = "top";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundAttachment = "fixed";
