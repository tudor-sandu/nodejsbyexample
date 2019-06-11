const Event = require("events");
const fs = require("fs");
class Watcher extends Event {
  constructor(filePath) {
    super();
    this.filePath = filePath;
    this.watchFile();
  }
  watchFile() {
    fs.watchFile(this.filePath, () => {
      this.emit("fileChange");
    });
  }
}
module.exports = Watcher;
