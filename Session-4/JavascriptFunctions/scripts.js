// 1. Function Declaration / Definition
function showStatus(userId) {
  console.log("System is running...");
  console.log("User ID provided:", userId);
}

// Calling the function with different values
showStatus(101234);
showStatus(202345);

// 2. Function with a Single Argument
function greetUser(name) {
  console.log("Hello, " + name + "! Welcome back.");
}

// Example usage
greetUser("Liya");

// 3. Function with Multiple Arguments - Simple Addition
function sumNumbers(num1, num2) {
  let total = num1 + num2;
  console.log("Sum is:", total);
}

// sumNumbers(23, 77);

// 4. Function that Returns a Value
function calculateSumAndAverage(x, y) {
  let total = x + y;
  let average = total / 2;
  return average;
}

// const result = calculateSumAndAverage(80, 120);
// console.log("Returned values:", result);

// // 5. Average Calculator (Simple Return)
// function findAverage(val1, val2) {
//   return (val1 + val2) / 2;
// }

// let average = findAverage(50, 70);
// console.log("The average is:", average);
