class MyGreeter {
  readonly name: string;
  constructor(otherName: string) {
    this.name = otherName;
  }
}

let greeter = new MyGreeter("Raghav");
// greeter.name = 'Charlie'; //Compiler ERROR
console.log(greeter);


class Employee {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");
console.log(emp);
// emp.empCode = 20; //Compiler Error
