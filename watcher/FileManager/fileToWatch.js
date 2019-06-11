const newFunc = (a, b) => {
  return a + b;
};
const operation = (a, b, fun) => fun(a, b);

console.lg(operation(4,5,newFunc));
console.log(operation(4,5,newFunc));
