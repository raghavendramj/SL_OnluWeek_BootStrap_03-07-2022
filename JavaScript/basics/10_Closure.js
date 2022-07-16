//Outer function
function greet(name) {
  //Inner function

  function display() {
    console.log("Hi, ", name);
  }
  //calling inner function
  display();
}
greet("Raghavendra");

//Outer function
function greet(name) {
  //Inner function

  function display() {
    console.log("Hi, ", name);
  }
  //calling inner function
  return display;
}
var greetMe = greet("Raghavendra");

//Outer function
function greet() {
  //Inner function
  //Variable decalred in outer function
  let name = "Raghavendra";

  function display() {
    //accessing name variable from outer fuction
    return "Hi, " + name;
  }
  //calling inner function
  return display;
}
var greetMe = greet();
greetMe();