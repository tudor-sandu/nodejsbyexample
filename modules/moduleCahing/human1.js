console.log(module.filename) 
class Human {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`Hello I'm ${this.name}`);
    }
  }
  
  module.exports = new Human("Paul");