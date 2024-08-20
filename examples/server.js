const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hello world");
});

server.listen(3000, () => {
  console.log("success");
});
