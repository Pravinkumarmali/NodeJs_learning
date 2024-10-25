const dbConnect = require("./19_mongoDB");

const updateData = async () => {
  let data = await dbConnect();

  //   updateOne()
  //   let result = await data.updateOne(
  //     { name: "note 5" },
  //     { $set: { name: "vivo s1" } }
  //   );

  //   updateMany()
  let result = await data.updateMany(
    { name: "iphone 12" },
    { $set: { name: "onePlus pro", price: 45000 } }
  );
  console.log(result);
};

updateData();
