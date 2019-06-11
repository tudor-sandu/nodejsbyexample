const Watcher = require("./watcher");
const { spawn } = require("child_process");

const fileWatch = new Watcher(process.argv[2]);
let exited = true;
let fileProcess = null;
const runLoop = () => {
  if (!exited) {
    fileProcess.kill();
    console.log("Last Process killed");
  }
  fileProcess = spawn("node", [process.argv[2]]);
  exited = false;
  fileProcess.stdout.on("data", data => {
    console.log(`${data}`);
  });

  fileProcess.stderr.on("data", data => {
    console.log(`${data}`);
  });

  fileProcess.on("exit", code => {
    if (code !== 0) {
      console.log("Code Exited with an error message, restarting");
      runLoop();
    }
    exited = true;
  });
};

runLoop();
fileWatch.on("fileChange", () => {
  console.log("Restarting ...");
  runLoop();
});
