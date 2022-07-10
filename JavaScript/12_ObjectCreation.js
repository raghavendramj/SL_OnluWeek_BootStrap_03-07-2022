// 1st Way -> Factory function
function createCircel(radius) {
  return {
    radius,
    draw: function () {
      console.log("Factory function - DRAW ", this.radius);
    },
  };
}

var cir1 = createCircel(14);
console.log(cir1);
var cir2 = createCircel(100);
console.log(cir2);

//2nd Way -> Constructor function
function Circle(radius) {
  console.log(this);
  this.radius = radius;
  this.draw = function () {
    console.log("Circle -> Constructor function - DRAW ", this.radius);
  };
}

var circle = new Circle(12);
console.log(circle);
// 1. new -> create an empty object {}
// 2. it will set that empty object to that current object
// 3. returns the object from the fuction
// Happens in sequence and automatically

function Employee(id, fname, lname, city) {
  this.id = id;
  this.fname = fname;
  this.lname = lname;
  this.city = city;
  this.fullName = function () {
    return this.fname + " " + this.lname;
  };
}

var employee = new Employee(1, "raghav", "mj", "bangalore");
console.log("employee -> ", employee);

//3rd way
var obj = {};
console.log("var obj = {} -> ", obj);

//4th way
var newObj = Object.create({});
console.log("Object.create({}) -> ", newObj);
