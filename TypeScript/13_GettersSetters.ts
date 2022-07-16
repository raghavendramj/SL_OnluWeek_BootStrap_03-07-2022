class Vehicle {
  _model: string;
  _make: string;
  _year: number;

  constructor(model = "Innova", make = "Toyota", year = 2017) {
    this._model = model;
    this._make = make;
    this._year = year;
  }

  get model() {
    //console.log("Getter is invoked");
    return this._model;
  }

  set model(str) {
    console.log("Setting via setter!");
    if (str !== undefined && str!= '') {
      this._model = str;
    } else {
      console.error("***************Incorrect model ****************");
    }
  }
}

let defa = new Vehicle();
console.log("Test Default values : ", defa);
console.log("defa.model : ", defa.model);

defa.model = '';
console.log("defa.model : ", defa.model);




