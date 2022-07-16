var MyGreeter = /** @class */ (function () {
    function MyGreeter(otherName) {
        this.name = otherName;
    }
    return MyGreeter;
}());
var greeter = new MyGreeter("Raghav");
greeter.name = 'Charlie';
console.log(greeter);
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(10, "John");
console.log(emp);
