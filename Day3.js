// Day 3: Arrays & Objects 
// 1️ Array Methods (map, filter, reduce)
let numbers = [10, 20, 30, 40, 50];

console.log("---- map() Example ----");
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

console.log("\n---- filter() Example ----");
let above25 = numbers.filter(num => num > 25);
console.log("Numbers > 25:", above25);

console.log("\n---- reduce() Example ----");
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);


// 2️ Objects and Nested Objects
const student = {
  name: "Avinash",
  age: 20,
  course: "Computer Science",
  marks: {
    math: 85,
    science: 90,
    english: 78
  }
};

console.log("\n---- Student Object ----");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("Math Marks:", student.marks.math);
console.log("Science Marks:", student.marks.science);


// 3️ Mini Task: Simple Student Marks Calculator
const studentMarks = {
  name: "Avinash",
  marks: [85, 90, 78, 88, 92]
};

function calculateMarks(student) {
  let total = student.marks.reduce((acc, m) => acc + m, 0);
  let avg = total / student.marks.length;

  console.log("\n---- Student Marks Calculator ----");
  console.log("Name:", student.name);
  console.log("Marks:", student.marks);
  console.log("Total Marks:", total);
  console.log("Average Marks:", avg.toFixed(2));

  if (avg >= 40) {
    console.log("Result: Pass ");
  } else {
    console.log("Result: Fail ");
  }
}

calculateMarks(studentMarks);
