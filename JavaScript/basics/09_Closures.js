function greeting() {
  var message = "Welcome to Simplilearn!";
  function sayHi() {
    // CLOSURE -> PRESERVE OUTER FUNCTION's variable(message)
    console.log(message);
  }
  return sayHi;
}

let hiMessage = greeting();

hiMessage();

//IIFE
var salaryOfEmp = (function () {
  var salary = 20000;
  function changeSalary(amount) {
    //Closure -> salary
    salary += amount;
    console.log("Current Salary :- ", salary);
  }
  return {
    raise: function (val) {
      changeSalary(val);
    },
    lower: function (val) {
      changeSalary(-val);
    },
    current: function () {
      console.log("Current Salary :- ", salary);
      return salary;
    },
  };
})();
