// <---- Remove Extension From URL ---->
const express = require("express");
const path = require("path");

const app = express();

// for access pages folder
const pagesPath = path.join(__dirname, "pages");
// app.use(express.static(pagesPath));

// Note: app.use() ka use nahi karge. ham app.get() ka use karege.

app.get("", (req, res) => {
  res.sendFile(`${pagesPath}/index.html`);
});

app.get("/home", (req, res) => {
  res.sendFile(`${pagesPath}/home.html`);
});

app.get("/about.us", (req, res) => {
  res.sendFile(`${pagesPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${pagesPath}/help.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${pagesPath}/pageNotFound.html`);
});
app.listen(4500);

// Question: "get()" function ke ander file ko load "sendFile()" method ki help se kar sakte hai.
