/**
 * Primitive Types / Value Types :- Copied By Value
 *
 * Number
 * String
 * Boolean
 * Symbol
 * undefined
 * null
 *
 * Reference Types :- Copied by reference.
 *
 * Object
 * Array
 * Function
 *
 */

let nameOfThePerson = "John";
let secondName = nameOfThePerson;
nameOfThePerson = "John Doe";

console.log("nameOfThePerson -> ", nameOfThePerson);
console.log("secondName -> ", secondName);

let person = {
  name: "John",
  age: 25,
};

let personCopy = person;
person.age = 34;
person["email"] = "john@gmail.com";

console.log("personCopy :- ", personCopy);
console.log("Person :- ", person);

delete person.age;

console.log("SECOND :- personCopy :- ", personCopy);
console.log("SECOND :- Person :- ", person);

let counter = 120; // counter is a number
console.log("typeof counter :- ", typeof counter);
counter = false; // counter is now a boolean
console.log("typeof counter :- ", typeof counter);
counter = "food"; // counter is now a string
console.log("typeof counter :- ", typeof counter);

let number;
console.log("number :- ", number);
console.log("typeof number :- ", typeof number);
number = 23;
console.log("typeof number :- ", typeof number);

let obj = null;
console.log(typeof obj);

console.log(obj == undefined);

let price = 200.0; // interpreted as an integer 200
console.log("price :- ", price);
console.log("Number.MAX_VALUE :- ", Number.MAX_VALUE);
console.log("Number.MIN_VALUE :- ", Number.MIN_VALUE);

console.log("20/0 :-", 20 / 0); // Infinity
console.log("'a'/0 :-", "a" / 0); //NaN -> Not a Number

let message = "Hey Buddy, How're you?";
console.log("Message :- ", message);

let str = "JavaScript";
str = str + " String";
console.log("str :- ", str);

let emptyObject = {};
console.log("emptyObject :- ", emptyObject);

let student = {
  firstName: "John",
  lastName: "Doe",
};

console.log("student :- ", student);

let contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};
console.log("contact.phone :- ", contact.phone);
console.log("contact['email'] :- ", contact["email"]);

console.log("------------------------------------------")
