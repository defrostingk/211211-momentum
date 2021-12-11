const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multi: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3);
console.log(plusResult);
const minusResult = calculator.minus(plusResult, 10);
console.log(minusResult);
const multiResult = calculator.multi(10, minusResult);
console.log(multiResult);
const divideResult = calculator.divide(multiResult, plusResult);
console.log(divideResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(powerResult);
