// to create basic server.

const http = require("http");

// http node js ke andar server ki request and response ko handle karta hai.
// http.createServer().listen(4500);
http
  .createServer((req, res) => {
    res.write("hello, This is Pravin here.");
    res.end();
  })
  .listen(4500);
