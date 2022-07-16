let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (a, b, callBackFunction) => {
  let result = callBackFunction(a, b);
  console.log("Result :- ", result);
};

let performOperation = (a, b) => {
  operate(a, b, (a, b) => {
    operate(20, 5, (a, b) => {
      operate(20, 5, (a, b) => {
        operate(20, 5, (a, b) => {
          return a / b;
        });
        return a * b;
      });
      return a - b;
    });
    return a + b;
  });
};

performOperation(30, 6);
