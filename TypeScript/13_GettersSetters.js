var Vehicle = /** @class */ (function () {
    function Vehicle(model, make, year) {
        if (model === void 0) { model = "Innova"; }
        if (make === void 0) { make = "Toyota"; }
        if (year === void 0) { year = 2017; }
        this._model = model;
        this._make = make;
        this._year = year;
    }
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            //console.log("Getter is invoked");
            return this._model;
        },
        set: function (str) {
            console.log("Setting via setter!");
            if (str !== undefined && str != '') {
                this._model = str;
            }
            else {
                console.error("***************Incorrect model ****************");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
var defa = new Vehicle();
console.log("Test Default values : ", defa);
console.log("defa.model : ", defa.model);
defa.model = '';
console.log("defa.model : ", defa.model);
