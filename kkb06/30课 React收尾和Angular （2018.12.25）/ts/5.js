function calcShape(a, b) {
    console.log(a);
    console.log(b);
}
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var s2 = new Shape();
calcShape({ x: 12, y: 88 }, s2);
