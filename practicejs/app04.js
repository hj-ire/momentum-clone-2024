//console.log(typeof age); you can see type
//parseInt - turn strings  into numbers
//prompt: show our window to the user, it stops JS, pop-up is bad can not modifie, old style

const age = parseInt(prompt("How old are you"));

//if -  true or false
//isNaN - not a number boolean
if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number"); //condition == true
} else if (age < 18) {
  console.log("You are too young to drink");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("Stop drinking, You should workout");
} else if (age === 100) {
  // ""==="" exact is "!=="" is not
  console.log("Wow Wow Congrats");
} else if (age > 80) {
  console.log("You can do whatever you want");
}
