const express = require("express");
const app = express();

app.all("/*", () => {
  console.log("Serving a request");
  while (true) {}
});
//Listen on port 7890
app.listen(7890, function() {
  console.log("Server started on port 7890");
});
