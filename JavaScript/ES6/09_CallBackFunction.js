let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (a, b, callBackFunction) => {
  let result = callBackFunction(a, b);
  console.log("Result :- ", result);
};

operate(20, 5, add);
operate(20, 5, subtract);
operate(20, 5, multiply);
operate(20, 5, divide);
