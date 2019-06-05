const { spawn } = require('child_process');

const run = () => {
  const file = spawn('node', [`${__dirname}/file.js`]);

  file.stdout.on('data', (data) => {
    console.log(`${data}`);
  });
}

module.exports = run