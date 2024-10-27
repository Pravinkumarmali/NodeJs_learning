// <----- Dynamic Page ----->
// How to make Loop in ejs.
// Make Header file
// Show comman Header File
// Interview Question
// Note: This is help of views folder.

const express = require("express");
const app = express();

app.set("view engine", "ejs");
// console.log("test");

// profile page
app.get("/profile", (req, res) => {
  const user = {
    name: "Pravin",
    email: "pravin@gmail.com",
    skills: ["Javascript", "Java", "MERN Stack", "Database"],
  };
  res.render("profile", { user });
});

// login page
app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(4500);
