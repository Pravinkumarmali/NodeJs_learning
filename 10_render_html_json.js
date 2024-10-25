// Render HTML and JSON

const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello this is home page. [HOME PAGE]</h1>");
});

app.get("/html", (req, res) => {
  res.send(`

    <h1>Hello this is HTML rendering page.[HTML]</h1>
    <input type="text" placeholder="username" value="${req.query.name}" />
    <button> Click me </button>
    `);
});

// note: value="${req.query.name}" likhne par output: undefined aata hai and value="${req.query}" likhne par output: object aata hai.

app.get("/json", (req, res) => {
  res.send([
    {
      name: "user1",
      email: "user1@gmail.com",
    },
    {
      name: "user2",
      email: "user2@gmail.com",
    },
    {
      name: "user3",
      email: "user3@gmail.com",
    },
    {
      name: "user4",
      email: "user4@gmail.com",
    },
  ]);
});
app.listen(4500);

// interview question: How to get value in url to on page.
// add --> value=${req.query} and get the value in page.
