var NumberCounter = /** @class */ (function () {
    function NumberCounter() {
    }
    NumberCounter.prototype.countNumbers = function (arr) {
        var positive = 0;
        var negative = 0;
        var zero = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                positive++;
            }
            else if (arr[i] < 0) {
                negative++;
            }
            else {
                zero++;
            }
        }
        console.log("Positive numbers:", positive);
        console.log("Negative numbers:", negative);
        console.log("Zero numbers:", zero);
    };
    return NumberCounter;
}());
var counter = new NumberCounter();
counter.countNumbers([10, -5, 0, 20, -3, 0]);
