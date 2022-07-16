function arrayDest() {
  function getScores() {
    return [45, 55, 20, 30, 56, 78, 12, 62];
  }

  let scores = getScores();
  let x = scores[0];
  let y = scores[1];
  let z = scores[2];
  console.log("X =", x);
  console.log("Y =", y);
  console.log("Z =", z);
  console.log("**********************************");

  let [a, b, c, ...others] = getScores(); //Array Destructuring
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
  console.log("others =", others);
}
// arrayDest();

function destDefaults() {
  //let myArray = [45];
  let myArray = [45, 23, 34];
  let [a, b = 1, c = 2] = myArray; //Default Values in Array Destructuring
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
}
destDefaults();
