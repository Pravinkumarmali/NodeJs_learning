// Insert Data in MongoDB
const { name } = require("ejs");
const dbConnect = require("./19_mongoDB");

const insert = async () => {
  const db = await dbConnect();
  //   console.log(db);
  //   console.log("Insert Function.");

  //   insert only one data.
  //   const result = await db.insertOne({
  //     name: "note 5",
  //     brand: "vivo",
  //     price: "15000",
  //     category: "mobile",
  //   });
  //   console.log(result);

  // insert multipal data

  const result = db.insertMany([
    { name: "iphone 11", brand: "apple", price: "35000", category: "mobile" },
    { name: "iphone 12", brand: "apple", price: "40000", category: "mobile" },
    { name: "iphone 13", brand: "apple", price: "45000", category: "mobile" },
    { name: "iphone 14", brand: "apple", price: "60000", category: "mobile" },
    { name: "iphone 15", brand: "apple", price: "90000", category: "mobile" },
  ]);

  if (result.acknowledged) {
    console.log("data inserted.");
  }
};

insert();
