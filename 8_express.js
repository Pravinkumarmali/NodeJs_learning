// <---- express ---->
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello, this is Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

// app.listen(4500);
