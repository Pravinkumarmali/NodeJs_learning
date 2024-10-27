// mongodb database connection.

const { MongoClient } = require("mongodb");
const databaseName = "e-commerce";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(databaseName);
  return db.collection("products");
}

module.exports = dbConnect;

// Note:
//  module.exports = dbConnect();
// yaad rahe ki jab bhi ham module exports kare tab function ko () me use nahi karna hai nahi to export nahi hoga.
// simple function ka naam likhna hai.
// Ex. module.exports = dbConnect;
