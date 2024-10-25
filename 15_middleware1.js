const express = require("express");

const app = express();

// use middleware in same file
// this is application level middleware

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age.");
  } else {
    res.send("Success");
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page.");
});

app.get("/users", (req, res) => {
  res.send("Welcome to Users Page.");
});
app.listen(4500);

// Types of Middleware
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware
