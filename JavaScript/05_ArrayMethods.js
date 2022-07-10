function arrayDemo() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa", "Royal", "Gokulraj"];
  console.log("students -> ", students);
  console.log("students[5] :- ", students[5]);
  console.log("typeof students :- ", typeof students);
}

// arrayDemo();

function printElements(arr) {
  console.log("Length  :- ", arr.length, "-> Array :- ", arr);
}

function addRemoveElementsFromEnd() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  printElements(students);
  students.push("Santosh");
  students.push("Vineet");
  console.log("************** After addition - From End *********************");
  printElements(students);
  students.pop();
  students.pop();
  students.pop();
  console.log("***********  After deletion - From End *********** ");
  printElements(students);
}
// addRemoveElementsFromEnd();

function addRemoveElementsFromBeginning() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  printElements(students);

  //Addition
  students.unshift("Ameya");
  students.unshift("Rishi");
  console.log("*********** After addition - From Beginning ***********");
  printElements(students);

  //Deletion
  students.shift();
  students.shift();
  students.shift();
  students.shift();
  console.log("*********** After removal  - From The Beginning  *********** ");
  printElements(students);
}

// addRemoveElementsFromBeginning();

function array_join() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  console.log(students.join(" <-> "));
}
// array_join();

function deleteMethod() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  printElements(students);

  delete students[1];
  delete students[3];
  printElements(students);
}
// deleteMethod();

function mergeTwoArrays() {
  var cities_01 = ["Bangalore", "Mysore"];
  var cities_02 = ["Chennai", "Mumbai"];
  var cities = cities_01.concat(cities_02);
  console.log("mergeTwoArrays -> ", cities);
}
// mergeTwoArrays();

function spliceMethod() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log(cities);

  // Parameters
  // 1 -> from position where elements needs to be added
  // 2 -> how many elements needs to removed
  // 3 and afterwards -> (element(s) that needs to be added)

  // Case - 01 : Only Removal
  cities.splice(3, 2);
  console.log("Removal :-", cities);

  cities = ["Bangalore", "Mysore"];
  //Case - 02 : Only Addition
  cities.splice(0, 0, "Lucknow", "Madhya Pradesh");
  console.log("Addition :- ", cities);

  cities = ["Chennai", "Mumbai", "Kolkota", "Delhi", "Hyderabad"];
  //Case - 03 : Addition and Removal
  cities.splice(1, 3, "Kerala", "Gujurat");
  console.log("Addition and Removal :- ", cities);
}
// spliceMethod();

function sliceMethod() {
  var cities = [
    "Bangalore",
    "Mysore",
    "Chennai",
    "Mumbai",
    "Kolkota",
    "Hyderabad",
    "Delhi",
  ];
  console.log("cities.slice(0, 3) :- ", cities.slice(0, 3));

  console.log("cities.slice(-3, -1) :- ", cities.slice(-3, -1));
}

sliceMethod();

function forOfMethod() {
  var cities = ["Chennai", "Mumbai", "Kolkota", "Delhi", "Hyderabad"];
  for (var prop of cities) {
    console.log("FOR OF :- Each Array value:-", prop);
  }
}
