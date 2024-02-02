//return - get the value out of function
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const pluseResult = calculator.plus(2, 3);
const minusResult = calculator.minus(pluseResult, 10);
const divideResult = calculator.divide(10, minusResult);
const powerResult = calculator.power(divideResult, minusResult);
