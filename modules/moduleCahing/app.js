const person = require("./human");
person.name = "Barney";
const paul = require("./human");
paul.speak();
person.name = "Paul";
const barney = require("./human");

console.log(require.cache);
barney.speak();
paul.speak();

// const paul = require("./human");

// paul.speak();

// const barney = require("./human1");
// barney.name = "Barney";

// console.log(require.cache);

// barney.speak();

// paul.speak();
