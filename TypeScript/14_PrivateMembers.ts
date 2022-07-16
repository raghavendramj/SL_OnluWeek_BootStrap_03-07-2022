class Product {
  constructor(
    private _model = "Innova",
    private _make = "Toyota",
    private _year = 2017
  ) {}

  get model() {
    return this._model;
  }

  set model(str) {
    console.log("Setting via setter!");
    if (str !== undefined && str != "") {
      this._model = str;
    } else {
      console.error("***************Incorrect model ****************");
    }
  }
}

let product1 = new Product();
console.log("Test Default values : ", product1);

let product2 = new Product("Sonet", "Kia", 2021);
console.log("Object values : ", product2);

console.log("product2 ", product2.model);

console.log("product2.model ", product2.model);
product2.model = "Carnival";
console.log("product2.model ", product2.model);