//1
const x = new Object();
const y = new Array();

console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(y));
console.log(y.__proto__.__proto__.__proto__);

//2
const Earthling = {
  name:'',
  breathe: () => {
    console.log("Breathing O2");
  }
};

const Human = Object.create(Earthling);
Human.speak = function() {
  console.log(`Hi I'm a human and my name is ${this.name}`);
};

const Programmer = Object.create(Human);
Programmer.writeCode = function() {
  console.log(`${this.name} is writing code`);
};

Object.create(Programmer);

Programmer.name = "Paul";
Programmer.breathe();
Programmer.speak();
Programmer.writeCode();

console.log(Programmer.__proto__);
console.log(Programmer.__proto__.__proto__);
