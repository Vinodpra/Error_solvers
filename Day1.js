
// Day 1: JavaScript Basics (P1)


// Variables and Data Types
let studentName = "Avinash";     // String
const studentAge = 20;           // Number
var isStudent = true;            // Boolean
let marks = [85, 90, 78];        // Array
let details = { city: "Bhopal" } // Object

console.log("---- Variables & Types ----");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Is Student:", isStudent);
console.log("Marks:", marks);
console.log("Details:", details);

// 2 Operators
console.log("\n---- Operators ----");
let x = 10, y = 3;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Power:", x ** y);

console.log("Comparison (x > y):", x > y);
console.log("Equality (x == y):", x == y);
console.log("Strict Equality (x === y):", x === y);

console.log("Logical AND (true && false):", true && false);
console.log("Logical OR (true || false):", true || false);
console.log("Logical NOT (!true):", !true);

//  First Node.js Script
console.log("\n---- First Script ----");
console.log("Hello, JavaScript Basics!");

// 4 Mini Task: Print Student Details from an Object
console.log("\n---- Student Details ----");

const student = {
  name: "Avinash",
  age: 20,
  course: "Computer Science",
  isActive: true
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("Active:", student.isActive);
