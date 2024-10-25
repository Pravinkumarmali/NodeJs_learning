// response send karte hai tab ham " respone.write like likhte hai"
// But jab ham request lete hai like react, vue, angular se tab ham "request. " ka use karege.
const data = require("./2_data");
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "applicationjson" });
    res.write(JSON.stringify(data)), res.end();
  })
  .listen(4500);
