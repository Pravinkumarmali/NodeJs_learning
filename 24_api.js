// Basic GET API with MongoDB.
const express = require("express");
const dbConnect = require("./19_mongoDB");
const app = express();

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});
app.listen(4500);
