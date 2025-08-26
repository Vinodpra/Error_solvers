// Day 4: Node.js Intro 
// 1️ What is Node.js?
// Node.js is a runtime that allows us to run JavaScript on the server side.

// 2️ npm init & installing packages
// In terminal:
//    npm init -y
//    npm install nodemon
// (Use nodemon for auto-restart on changes)

// 3️ Creating First Node Server with http
const http = require("http");

const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Welcome to My First Node.js Server!");
  res.end();
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});


// 4️ Task: API returning "Hello, World!"
// Run this server and open http://localhost:3000/hello
const apiServer = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, World!" }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

apiServer.listen(4000, () => {
  console.log("API Server running at http://localhost:4000/hello");
});
