// Day 5: Express.js Basics (P1)
//    npm install express
const express = require("express");
const app = express();
const PORT = 3000;
// Middleware to parse JSON body
app.use(express.json());

// 2️ Create GET Route
app.get("/", (req, res) => {
  res.send("Welcome to Express.js Basics!");
});

// 3️ Create POST Route
app.post("/greet", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}! Welcome to Express.js `);
});

// 4️ Mini Task: API returning a list of students (JSON)
const students = [
  { id: 1, name: "Avinash", age: 20 },
  { id: 2, name: "Vinod", age: 21 },
  { id: 3, name: "Rahul", age: 19 }
];

app.get("/students", (req, res) => {
  res.json(students);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Check students list at http://localhost:${PORT}/students`);
});
