let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you(developer) know the environment better than TypeScript.

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const myObj: number = obj;

let myName: string = "Adam Gil";
let myNameWithoutExplicitType = "Adam Gil";

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// greet(40);
greet("Ricky");

function square(num): number {
  //return "John Doe"; //Type 'string' is not assignable to type 'number'.ts(2322)
  return num * num;
}
