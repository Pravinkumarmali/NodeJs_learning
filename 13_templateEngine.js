// Template Engine

// What is Template Engine? =>> Template engine ka use dynamic pages banane me kaam aate hai . Inko bhi npm ki help se install karna padta hai.

// Template engine ke liye ham "ejs" tempkate engine ka use karege.
// Embedded JavaScript templates (EJS)

// This is help of "views" folder.
// Note: Jab bhi ham koi bhi template engine use kare tab hame folder "views" ke name se hi banana hai, ye by default hai.
const express = require("express");

const app = express();

// app ko set karna hai. same format.
app.set("view engine", "ejs");

// ex.1
// app.get("/profile", (req, res) => {
//   res.render("profile");
// });

// ex.2
// pass object and get a data in web browser.
app.get("/profile", (req, res) => {
  const user = {
    name: "Pravin Kumar",
    email: "pravinkumar@gmailcom",
  };
  res.render("profile", { user });
});

app.listen(4500);

// Note : { user } curly bracket me likha hona chahiye nahi to error aayega.
