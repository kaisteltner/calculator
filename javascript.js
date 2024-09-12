let num1 = null;
let num2 = null;
let operator = null;
let displayVal = 0;

display = document.getElementById('display');
btnsNum = document.getElementsByClassName('btn-num')
console.log(btnsNum);

function add(a, b) {
  // Add numbers a and b and return result.
  return a + b;
}

function subtract(a, b) {
  // Substract number b from a and return result.
  return a - b;
}

function multiply(a, b) {
  // Multiply number a by b and return result.
  return a * b;
}

function divide(a, b) {
  // Divide number a by b and return result. Returns null for division by 0.
  if (b === 0) {return null} else {return a / b};
}

function operate(a, b, operator) {
  // Feed numbers a and b to operator function and return result.
  return operator(a, b);
}

function resetCalculator() {
  num1 = null;
  num2 = null;
  operator = null;
  displayVal = 0;
  display.value = displayVal;
  return
}

function btnNumCallback() {
  displayVal = displayVal * 10 + Number(this.innerText);
  display.value = displayVal;
}

// Test add
// console.log("2 + 5 =", add(2, 5));
// console.log("2 + -5 =", add(2, -5));
// console.log("0.25 + 0.5 =", add(0.25, 0.5));

// Test substract
// console.log("2 - 5 =", substract(2, 5));
// console.log("2 - -5 =", substract(2, -5));
// console.log("0.25 - 0.5 =", substract(0.25, 0.5));

// Test multiply
// console.log("2 * 5 =", multiply(2, 5));
// console.log("0 * -5 =", multiply(0, -5));
// console.log("-1 * -5 =", multiply(-1, -5));
// console.log("0.25 * -0.5 =", multiply(0.25, -0.5));

// Test divide
// console.log("4 / 2 =", divide(4, 2));
// console.log("2 / -1 =", divide(2, -1));
// console.log("-1 / -5 =", divide(-1, -5));
// console.log("-1 / 0 =", divide(-1, 0));
// console.log("0.25 / -0.5 =", divide(0.25, -0.5))

// num1 = 4;
// num2 = -2;
// operator = subtract;
// console.log(operate(num1, num2, operator))

for (let btnNum of btnsNum) {
  btnNum.addEventListener('click', btnNumCallback);
}

resetCalculator();