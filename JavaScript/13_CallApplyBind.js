// function greeting() {
//   console.log("This is ", this);
//   console.log(this.name);
// }
// greeting.call({ name: "Raghav" });

function add(b, c) {
  console.log("This is ", this);
  var result = this.a + b + c;
  console.log("Result :- ", result);
  return result;
}

// add(20, 10);
var obj = { a: 20 };
add.call(obj, 10, 14);
add.apply(obj, [10, 14]);

var add10 = add.bind({ a: 10 });
add10(4, 4);
add10(6, 6);
add10(5, 10);
