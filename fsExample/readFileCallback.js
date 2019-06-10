const fs = require("fs");

fs.readFile(
  `${__dirname}/fileToRead.txt`,
  { encoding: "utf-8" },
  (err, data) => {
    if (err) throw err;
    fs.writeFile(`${__dirname}/fileToReadCopy.txt`, data, err => {
      if (err) throw err;
    });
  }
);
