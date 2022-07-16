var Product = /** @class */ (function () {
    function Product(_model, _make, _year) {
        if (_model === void 0) { _model = "Innova"; }
        if (_make === void 0) { _make = "Toyota"; }
        if (_year === void 0) { _year = 2017; }
        this._model = _model;
        this._make = _make;
        this._year = _year;
    }
    Object.defineProperty(Product.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (str) {
            console.log("Setting via setter!");
            if (str !== undefined && str != "") {
                this._model = str;
            }
            else {
                console.error("***************Incorrect model ****************");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var product1 = new Product();
console.log("Test Default values : ", product1);
var product2 = new Product("Sonet", "Kia", 2021);
console.log("Object values : ", product2);
console.log("product2 ", product2.model);
console.log("product2.model ", product2.model);
product2.model = "Carnival";
console.log("product2.model ", product2.model);
