function testArrays() {
  const names = ["Alice", "Bob", "Eve"];
  names.forEach((value: string, index: number, arr: string[]) => {
    console.log("Index :", index, " Value :", value, " arr :", arr);
  });
}
// testArrays();

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// printCoord({ x: 3, y: "7" });
// printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  console.log("Object :", obj);

  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  // A safe alternative using modern JavaScript syntax:
  console.log("More safer way :- ", obj.last?.toUpperCase());
}

// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

function printId(id: number | string) {
  //   console.log("Youd Id is : " + id);
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log("Square of a number is ", id * id);
  }
}

printId(101);
printId("Raghav");

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

console.log(
  "getFirstThree([6, 1, 2, 9, 2]) :- ",
  getFirstThree([6, 1, 2, 9, 2])
);
console.log(
  "getFirstThree('rickypointing') :- ",
  getFirstThree("rickypointing")
);
