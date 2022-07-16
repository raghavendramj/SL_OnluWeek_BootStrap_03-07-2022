var Square = /** @class */ (function () {
    //Defaults -> 0, 0
    function Square(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Square;
}());
var square1 = new Square();
console.log("Test Square : ", square1);
var square2 = new Square(12, 23);
console.log("Test Square : ", square2);
