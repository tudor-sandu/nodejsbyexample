console.log(Object.keys(require.cache));
const person = require("./human");
person.name = "Barney";

// const paul has the same reference as const person
const paul = require("./human");
paul.speak();
//Module caching is global, even if you require a cached module from another file
const app2 = require('./app2');

person.name = "Paul";
const barney = require("./human");
barney.speak();
paul.speak();

console.log(require.cache['/home/tudor.sandu@3pillar.corp/Work/nodejsbyexample/modules/moduleCahing/human.js']);
console.log(paul === person);
console.log(paul === barney);
console.log(barney === person);
// const paul = require("./human");

// paul.speak();

// const barney = require("./human1");
// barney.name = "Barney";

// console.log(require.cache);

// barney.speak();

// paul.speak();
