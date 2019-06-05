const util = require("util");

class Earthling {
  breathe() {
    console.log(`Breathing O2`);
  }
}

class Human extends Earthling {
  constructor(name) {
    super();
    this.name = name;
  }
  speak() {
    console.log(`Hello I'm ${this.name}`);
  }
}

class Programmer extends Human {
  constructor(name) {
    super(name);
  }
  writeCode() {
    console.log(`${this.name} is programming`);
  }
}

const paul = new Programmer("Paul");

console.log("\n Paul says:");
paul.writeCode();
paul.speak();
paul.breathe();
console.log(paul.__proto__);
console.log(paul.__proto__.__proto__);
console.log(paul.__proto__.__proto__.__proto__);
// This code is the same under the hood but with different writing
function sameEarthling() {}

sameEarthling.prototype.breathe = () => {
  console.log(`Breathing O2`);
};

function sameHuman(name) {
  this.name = name;
}
sameHuman.prototype.speak = function() {
  console.log(`Hello, I'm ${this.name}`);
};
util.inherits(sameHuman, sameEarthling);

function sameProgrammer(name) {
  sameHuman.call(this, name);
}
sameProgrammer.prototype.writeCode = function() {
  console.log(`${this.name} is programming`);
};
util.inherits(sameProgrammer, sameHuman);

console.log("\n Same Paul says:");
const samePaul = new sameProgrammer("Paul");
samePaul.writeCode();
samePaul.speak();
samePaul.breathe();
console.log(paul.__proto__);
console.log(samePaul.__proto__.__proto__);
console.log(samePaul.__proto__.__proto__.__proto__);