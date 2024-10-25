// Route Level Middleware
// Route leval middleware me ham priticular 1 route, group of route and all route par middleware apply kar sakate hai.

const express = require("express");
const reqFilter = require("./17_seprateMiddleware.js");
const app = express();
const route = express.Router();

route.use(reqFilter);

// method:1
app.get("/", reqFilter, (req, res) => {
  res.send("Welcome to Home Page.");
});

app.get("/users", reqFilter, (req, res) => {
  res.send("Welcome to Users Page.");
});

// not in middleware
app.get("/profile", (req, res) => {
  res.send("This page is not in middleware.");
});

// method:2
// About page and contact route par hamene Alag se Route ko require kiya hai and  fir use route.get() se use karke app.use("/", route) use kiya hai. Jisse ye dikhne me bhi aacha lage or use karna bhi easy ho middleware ko particular route par.

route.get("/about", (req, res) => {
  res.send("This page is route in middleware.");
});

route.get("/contact", (req, res) => {
  res.send("This page is route in middleware.");
});

app.use("/", route);

app.listen(4500);
