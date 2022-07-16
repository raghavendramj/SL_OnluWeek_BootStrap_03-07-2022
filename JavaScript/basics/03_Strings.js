let str = "Hello";
console.log("str['0'] :- ", str["0"]);
console.log("str[str.length -1] :- ", str[str.length - 1]);

let className = "btn";
className += " btn-primary";
className += " none";
console.log(className);

let statusVar = false;
console.log("typeof statusVar :- ", typeof statusVar);
let string = statusVar.toString();
console.log("typeof string :- ", typeof string);
let back = Boolean(string);
console.log("typeof back :- ", typeof back);

let result = "a" < "b";
console.log("'a' < 'b' = ", result);

result = "a" < "B";
console.log("'a' < 'B' = ", result); 

console.log("----------------------------------------------");
