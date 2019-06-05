const { spawn } = require('child_process');
const file = spawn('node', [`${__dirname}/file.js`]);

file.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

file.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

file.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});