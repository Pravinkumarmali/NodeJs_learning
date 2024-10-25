// <---- Connect MongoDB With Node.js ---->

// const MongoClient = require("mongodb").MongoClient;
// Both Are true, in morden js use is this syntex.

const { MongoClient } = require("mongodb");
const database = "e-commerce";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
// we can do also diffrent name from client, connection etc.
async function getData() {
  let result = await client.connect();
  //   result.db("e-commerce");
  let db = result.db(database);
  let collection = db.collection("products");
  //   console.log(collection.find({}).toArray());
  // handel this promises by use of await, like this..
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData();

// Question: Kiya ham ek sath me 2 database ko connect kar sakte hai ?
// Answer: Yes, We can do connect 1 and more database.
// Ek or connection bana kar Dono ko connect kar sakate hai.
