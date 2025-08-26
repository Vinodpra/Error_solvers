
// Day 2: Functions & Loops 
// 1️ Functions & Conditionals
function checkResult(marks) {
  if (marks >= 40) {
    return "Pass ";
  } else {
    return "Fail ";
  }
}

console.log("---- Functions & Conditionals ----");
console.log("Result (45):", checkResult(45));
console.log("Result (30):", checkResult(30));


// 2️ Loops
let numbers = [10, 20, 30, 40, 50];

console.log("\n---- For Loop ----");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("\n---- While Loop ----");
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

console.log("\n---- forEach Loop ----");
numbers.forEach(num => console.log(num));


// 3️ Mini Task: Find Highest Marks from an Array
let marks = [65, 89, 75, 92, 56, 99, 81];

function findHighest(marks) {
  let highest = marks[0];
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }
  return highest;
}

console.log("\n---- Mini Task ----");
console.log("Marks:", marks);
console.log("Highest Marks:", findHighest(marks));
