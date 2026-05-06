"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var ElectricityBill = /** @class */ (function () {
    function ElectricityBill() {
    }
    ElectricityBill.prototype.calculateBill = function (units) {
        var amount;
        switch (true) {
            case (units <= 100):
                amount = units * 2;
                break;
            case (units <= 200):
                amount = units * 3;
                break;
            default:
                amount = units * 5;
        }
        console.log("\nUnits:", units);
        console.log("Bill Amount:", amount);
    };
    return ElectricityBill;
}());
var bill = new ElectricityBill();
// Take user input
var input = readlineSync.question("Enter number of units: ");
var units = parseInt(input);
if (isNaN(units) || units < 0) {
    console.log("Invalid input! Please enter a valid number.");
}
else {
    bill.calculateBill(units);
}
