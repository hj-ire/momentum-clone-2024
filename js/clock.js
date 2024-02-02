const clock = document.querySelector("h2#clock");

function getClock() {
  clock.innerText = new Date().toLocaleTimeString();
  //   const date = new Date();
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   const seconds = String(date.getSeconds()).padStart(2, "0");
  //   clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //2 arguments function, time(1000 = 1s), executed every 5s
//setTimeout(sayHello, 5000); // executed 5s later
