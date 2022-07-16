var Point = /** @class */ (function () {
    //Defaults -> 0, 0
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    return Point;
}());
var pt = new Point(12, 14);
console.log("Before Scaling : ", pt);
pt.scale(3);
console.log("After Scaling : ", pt);
