const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ticketRouter = require("./tickets");
const app = express();

// Configure Body Parser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

//Configure CORS to allow preflight from any domain
app.use(cors());
app.options("*", cors());
app.use("/tickets", ticketRouter);

//Listen on port 7890
app.listen(7890, function() {
  console.log("Server started on port 7890");
});
