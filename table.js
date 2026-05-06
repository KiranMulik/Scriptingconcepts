"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.printTable = function (num) {
        console.log("\nMultiplication Table of " + num);
        for (var i = 1; i <= 10; i++) {
            console.log("".concat(num, " x ").concat(i, " = ").concat(num * i));
        }
    };
    return Table;
}());
var t = new Table();
// Take user input
var input = readlineSync.question("Enter a number: ");
var number = parseInt(input);
if (isNaN(number)) {
    console.log("Invalid input! Please enter a number.");
}
else {
    t.printTable(number);
}
