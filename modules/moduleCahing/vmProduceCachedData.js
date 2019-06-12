const vm = require("vm")
let helloScript = new vm.Script('console.log("Hello World!");', {
    produceCachedData: true 
  });
console.log(helloScript)
helloScript.runInThisContext();