class Base {
  x = 4;
}

class Derived extends Base {
  constructor() {
    super();
    console.log("Derived Constructor", this.x);
  }
}



let obj = new Derived();
console.log("Derived object : ", obj);