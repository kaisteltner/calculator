function add(a, b) {
  // Add numbers a and b and return result.
  return a + b;
}

function substract(a, b) {
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
// console.log("0.25 / -0.5 =", divide(0.25, -0.5));