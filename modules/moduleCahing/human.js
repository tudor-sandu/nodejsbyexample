console.log("------------------Human Absolute path----------------");
console.log(module.filename)
console.log("-----------------------------------------------------");
class Human {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Hello I'm ${this.name}`);
  }
}

module.exports = new Human("Paul");