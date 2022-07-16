function printValues() {
  console.log("1");
  setTimeout(function () {
    console.log("2");
  }, 2000);
  setTimeout(function () {
    console.log("3");
  }, 0);
  console.log("4");
}

// printValues();

function testSetTimeout() {
  for (var i = 1000; i < 4000; i = i + 1000) {
    setTimeout(function () {
      console.log("Value of i :- ", i);
    }, i);
  }
}
// testSetTimeout();

function solutionOne() {
  for (var i = 1000; i < 4000; i = i + 1000) {
    //IIFE -> Every iteration -> i
    (function (i) {
      setTimeout(function () {
        console.log("USING IIFE:- Value of i :- ", i);
      }, i);
    })(i);
  }
}
solutionOne();

function solutionTwo() {
  //Using LET Keyword!
  for (let i = 1000; i < 4000; i = i + 1000) {
    setTimeout(function () {
      console.log("USING LET:- Value of i :- ", i);
    }, i);
  }
}
solutionTwo();
