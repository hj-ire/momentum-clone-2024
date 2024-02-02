//function part two
const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " Nice to meet you");
  },
};

console.log(player.name);
player.sayHello("Nico");
player.sayHello("Lynn");

//test
const calculator = {
  plus: function (a, b) {
    console.log("the answer is", a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculator.plus(15, 20);
calculator.minus(20, 52);
calculator.divide(523, 1212);
calculator.power(131, 2);
