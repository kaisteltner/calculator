let num1 = null;
let num2 = null;
let operator = null;
let displayVal = 0;

const display = document.getElementById('display');
const btnsNum = document.getElementsByClassName('btn-num');
const btnAdd = document.querySelector('.btn-add');
const btnSub = document.querySelector('.btn-subtract');
const btnMul = document.querySelector('.btn-multiply');
const btnDiv = document.querySelector('.btn-divide');
const btnsOperators = [btnAdd, btnSub, btnMul, btnDiv];

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
  resetDisplay();
  return
}

function resetDisplay() {
  displayVal = 0;
  display.value = displayVal;
}

function btnNumCallback() {
  displayVal = displayVal * 10 + Number(this.innerText);
  display.value = displayVal;
}

function deactivateOperators() {
  btnsOperators.forEach(btn => (btn.classList.remove('active')));
}

function evaluate() {
  if (num1 !== null && num2 === null) {
    num2 = displayVal;
  }
  if (num1 === null || num2 === null || operator === null) {
    console.log('Missing data.');
    return;
  }

  displayVal = operate(num1, num2, operator);
  display.value = displayVal;
  num1 = displayVal;
  num2 = null;
  operator = null;

  deactivateOperators();
}

// EventListeners for number buttons
for (let btnNum of btnsNum) {
  btnNum.addEventListener('click', btnNumCallback);
}
document.querySelector('.btn-delete').addEventListener('click', resetDisplay);

// EventListeners for operators
btnAdd.addEventListener('click', () => {
  btnAdd.classList.toggle('active');
  operator = add;
  
  // Update variables
  if (num1 === null) {
    num1 = displayVal;
  } else {
    // Evaluate sum and update display
  }
  
  resetDisplay();
});

btnSub.addEventListener(
  'click', () => {
  btnSub.classList.toggle('active');
  operator = subtract;

  // Update variables
  if (num1 === null) {
    num1 = displayVal;
  } else {
    // Evaluate sum and update display
  }

  resetDisplay();
});

btnMul.addEventListener(
  'click', () => {
  btnMul.classList.toggle('active');
  operator = multiply;

  // Update variables
  if (num1 === null) {
    num1 = displayVal;
  } else {
    // Evaluate sum and update display
  }

  resetDisplay();
});

btnDiv.addEventListener(
  'click', () => {
  btnDiv.classList.toggle('active');
  operator = divide;

  // Update variables
  if (num1 === null) {
    num1 = displayVal;
  } else {
    // Evaluate sum and update display
  }

  resetDisplay();
});

// Evaluate
document.querySelector('.btn-equal').addEventListener('click', evaluate)

resetCalculator();