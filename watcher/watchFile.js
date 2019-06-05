const fs = require("fs");
const runFile = require("./runFile")

runFile();
fs.watchFile(`${__dirname}/file.js`, () => {
    console.log(`Restarting...`)
    runFile();
});
