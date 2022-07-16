function sum(...args) {
  let sum = args.reduce((a, c) => a + c, 0);
  console.log("Sum is :- ", sum);
  return sum;
}

// sum(2, 6);
// sum(4, 9, 16);
// sum(4, 9, 16, 25, 29, 100, 66, 77);

function testSpread() {
  let fruits = ["Apple", "Orange", "Banana"];

  let newFruits = ["Cherry", ...fruits];
  console.log("clubbed array :- ", newFruits);

  let address = { city: "Bangalore", state: "Karnataka" };
  let employee = { name: "John Doe", email: "john.doe@gmail.com", ...address };
  console.log("Injected employee :- ", employee);

  let numbers = [4, 9, 16, 25, 29, 100, 66, 7];
  console.log("Maximum number :- ", Math.max(...numbers));
}
testSpread();
