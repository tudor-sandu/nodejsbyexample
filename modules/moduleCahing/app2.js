console.log("-----------Code from different file--------------")
const paul = require("./human");
paul.speak();
console.log(Object.keys(require.cache));
console.log("-------------------------------------------------")
