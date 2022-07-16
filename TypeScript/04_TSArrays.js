function testArrays() {
    var names = ["Alice", "Bob", "Eve"];
    names.forEach(function (value, index, arr) {
        console.log("Index :", index, " Value :", value, " arr :", arr);
    });
}
// testArrays();
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
// printCoord({ x: 3, y: "7" });
// printCoord({ x: 3, y: 7 });
function printName(obj) {
    var _a;
    console.log("Object :", obj);
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log("More safer way :- ", (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });
function printId(id) {
    //   console.log("Youd Id is : " + id);
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log("Square of a number is ", id * id);
    }
}
printId(101);
printId("Raghav");
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log("getFirstThree([6, 1, 2, 9, 2]) :- ", getFirstThree([6, 1, 2, 9, 2]));
console.log("getFirstThree('rickypointing') :- ", getFirstThree("rickypointing"));
