const dbConnect = require("./19_mongoDB");

// Method: 1

// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });
// console.warn(dbConnect());

// Method: 2
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};

main();
