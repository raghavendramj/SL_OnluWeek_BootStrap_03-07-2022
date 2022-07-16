function mapTest() {
  let numbers = [2, 4, 6, 8];
  console.log("Numbers : ", numbers);

  let squares = [];
  for (let eachNumber of numbers) {
    squares.push(eachNumber * eachNumber);
  }
  console.log("Typical Way :- Squares : ", squares);

  let callBackForSquare = (number) => number * number;
  let es6Squres = numbers.map(callBackForSquare);
  console.log("ES6 Way :- Squares : ", es6Squres);

  console.log(
    "Simplified Squares : ",
    numbers.map((number) => number * number)
  );
}

// mapTest();

function filters() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let odds = [];
  let evens = [];
  for (let eachNumber of numbers) {
    if (eachNumber % 2 == 0) {
      evens.push(eachNumber);
    } else {
      odds.push(eachNumber);
    }
  }
  console.log("Typical Way :- Odds : ", odds);
  console.log("Typical Way :- evens : ", evens);

  console.log(
    "ES6 1Line:- evens : ",
    numbers.filter((num) => num % 2 == 0)
  );
  console.log(
    "ES6 1Line:- odds : ",
    numbers.filter((num) => num % 2 != 0)
  );
}

// filters();

function reduceFunction() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;
  for (let eachNumber of numbers) {
    sum += eachNumber;
  }
  console.log("Typical way :- Sum :- ", sum);

  console.log(
    "ES6 way :- Sum :- ",
    numbers.reduce((accumulator, currValue) => {
      console.log("accumulator: ", accumulator, " and element: ", currValue);
      return accumulator + currValue;
    })
  );

  console.log(
    "One Liner :- ",
    numbers.reduce((a, c) => a + c, 100)
  );
}

// reduceFunction();

function findFunc() {
  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.find((number) => number > 18);
  console.log("Firsyt number > 18 :- ", first);
}
findFunc();