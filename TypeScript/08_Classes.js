var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
var rect = new Rectangle();
rect.x = 10;
rect.y = 20;
// rect.y = "20"; //Type 'string' is not assignable to type 'number'.ts(2322)
console.log("Rectangle obj : ", rect);
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.message = message;
    }
    return Greeter;
}());
var obj = new Greeter("Welcome to the class");
console.log(obj);
