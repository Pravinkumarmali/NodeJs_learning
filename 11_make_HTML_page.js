// Make HTML Page.  // Help of public folder.

const express = require("express");
const path = require("path");

const app = express();
// for access public folder
const publicPath = path.join(__dirname, "public");

// console.log(publicPath);
// output: C:\Users\Sai\Desktop\node_learning\public

app.use(express.static(publicPath));

app.listen(4500);

// Question: path module ka use ?
// =>> Path module ka use folder ko access karne me use karta hai.

// Question: static method ka use?
// =>> static() method project me static file ya content ka load karta hai.
