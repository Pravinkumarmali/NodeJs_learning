const express = require("express");
const app = express();

app.get("", (req, res) => {
  // console.log("Data send by browser =>>", req.query);
  console.log("Data send by browser =>>", req.query.name);

  res.send("Hello this is home page.....test..!");
});

app.get("/about", (req, res) => {
  res.send("Hello this is About page.......:)");
});

app.listen(4500);
