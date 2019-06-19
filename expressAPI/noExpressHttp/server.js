const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hello" && req.method === "GET") {
    res.end("Hello World");
  } else if (req.url === "/json" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hello World" }));
  } else {
    res.statusCode = 401;
    res.end("You're not welcome");
  }
});

server.listen(8080);
