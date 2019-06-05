//https://nodejs.org/api/modules.html#modules_modules
const func = require("./newMod");

func();

// (function(){
//     const functionIWantToRequire = () =>{
//         console.log("Great Job!")
//     }
// })()

// functionIWantToRequire();

//Objects are Pass By Reference and how does NodeJs wraps modules
//https://nodejs.org/api/modules.html#modules_the_module_wrapper
let myModule = {};

(function(local_module) {
  const functionIWantToRequire = () =>{
      console.log("Great Job!")
  }
  console.log(local_module === myModule);
  local_module.exports = functionIWantToRequire
})(myModule);

myModule.exports();
