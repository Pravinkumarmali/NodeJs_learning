// Getting Input From Command Line

// console.log(process.argv);

// task1 : make file using process.argv

const fs = require("fs");
const input = process.argv;
fs.writeFileSync(input[2], input[3]);

// file ko remove karne ke liye.
// fs.unlinkSync(input[2])
// ka use karege.
