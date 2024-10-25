// Delete Data in MongoDB

const dbConnect = require("./19_mongoDB");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "iphone 14" });
  console.log(result);
  if (result.acknowledged) {
    console.log("record deleted.");
  }
};
deleteData();

// Question: If koi record yadi database me na ho or usse delee kare tab output me acknowledged: true hoga but "deletedCount: 0" aayega.
