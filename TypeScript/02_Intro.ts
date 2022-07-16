console.log("Welcome to Typescript!");

function greetPeople(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}`);
}

// greetPeople('Michael', Date()); 
//Argument of type 'string' is not assignable to parameter of type 'Date'.ts(2345)
greetPeople('Michael', new Date()); 


// Step 01 -> tsc 02_Intro.ts 
//     -> this will transpile and generate the 02_Intro.js

// Step 02 -> node 02_Intro.js
//     -> this will execute the program and generates the output

// Shortcut -> tsc 02_Intro.ts  |  node 02_Intro.js