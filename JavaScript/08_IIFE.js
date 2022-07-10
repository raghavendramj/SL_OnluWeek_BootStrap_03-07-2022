//Normal Function
function add(a, b) {
  return a + b;
}
console.log(
  "Normal Function :- ",
  add(10, 20),
  " -> typeof add :- ",
  typeof add
);

//Function Expression
var add = function (a, b) {
  return a + b;
};
console.log(
  "Function Expression :- ",
  add(10, 20),
  " -> typeof add :- ",
  typeof add
);

//IIFE -> Immediately Invoable Function Expression!
var result = (function (a, b) {
  console.log("Result :- ", a + b);
  return a + b;
})(15, 16);

console.log("IIFE :- ", result);
console.log("typeof result :- ", typeof result);

const calculator = (function(){
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }

  return {
    sum: add,
    prod: multiply,
    diff: subtract,
  };
})();

console.log("calculator.sum(10, 20)", calculator.sum(10, 20));
console.log("calculator.prod(10, 20)", calculator.prod(10, 20));
console.log("calculator.diff(30, 20)", calculator.diff(30, 20));
