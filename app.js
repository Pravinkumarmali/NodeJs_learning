const script = require("./script");
const fs = require("fs");

// console.log(script.(z));

console.log(script.name);

// create file
fs.writeFileSync("hello.txt", "create new file");

// show directory name.
console.log("------> ", __dirname);

// show file name
console.log("====>", __filename);
