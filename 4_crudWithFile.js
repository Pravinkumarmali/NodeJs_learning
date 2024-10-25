// <---- CRUD With file ------>
//  Sari file me CRUD folder ke andar banana hai.

const { isUtf8 } = require("buffer");
const fs = require("fs");
const path = require("path");
// specific folder name
const dirPath = path.join(__dirname, "CRUD");

const filePath = `${dirPath}/apple.txt`;

// <-----  create ----->
// fs.writeFileSync(filePath, "This is test file in CRUD folder.");

// <-----  read  ------>

// case:1
// fs.readFile(filePath, (err, item) => {
//   console.log(item);
// });

// output: <Buffer 54 68 69 73 20 69 73 20 74 65 73 74 20 66 69 6c 65 20 69 6e 20 43 52 55 44 20 66 6f 6c 64 65 72 2e>

// case:2
// fs.readFile(filePath, "Utf8", (err, item) => {
//   console.log(item);
// });

// <-----  update ----->

// fs.appendFile(filePath, "and file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

// <----- rename file apple.txt to fruit.txt

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("file name is updated.");
//   }
// });

// <----- delete file ---->
// fs.unlinkSync(`${dirPath}/apple.txt`);
