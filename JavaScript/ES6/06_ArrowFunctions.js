//Normal Function
function sayHello(a, b) {
  console.log("Normal Function :- Welcome the class! :- ", a + b);
}
sayHello(12, 34);

//Function Expression -> ES5
let funExpression = function (a, b) {
  console.log("Function Expression :- Welcome the class!! :- ", a + b);
};

funExpression(12, 34);

//Arrow Function -> ES6
let arrowFunction = (a, b) => {
  console.log("Arrow Function:- Welcome to the class! :- ", a + b);
};
arrowFunction(12, 34);

let add = (a, b) => {
  return a + b;
};

let addSimplified = (a, b) => a + b;

let square = (number) => {
  return number * number;
};

let squareSimplified = number => number * number;
