const fs = require("fs");

let readable = fs.createReadStream(`${__dirname}/fileToRead.txt`, {
  encoding: "utf-8",
  highWaterMark: 10
});

let writable = fs.createWriteStream(`${__dirname}/fileToReadCopy.txt`);

readable.on("data", chunk => {
  console.log(chunk.length);
  writable.write(chunk.toUpperCase());
});
