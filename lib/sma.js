"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(dataSet, period) {
    var total = dataSet.reduce(function (acc, cur) { return acc + cur; }, 0);
    return total / period;
}
exports.default = default_1;
