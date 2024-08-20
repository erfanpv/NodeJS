const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./fs/write.txt", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Error Occurred");
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write("<h1>Erfan</h1>");
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Port Update successfully");
});
