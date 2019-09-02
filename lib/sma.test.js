"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sma_1 = require("./sma");
test('sma', function () {
    var result = sma_1.default([1, 2, 3], 3);
    expect(result).toBe(2);
});
