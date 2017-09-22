"use strict";
exports.__esModule = true;
var array_inclusion_1 = require("./array-inclusion");
function arrayExclusion(value, options) {
    if (options === void 0) { options = {}; }
    return !array_inclusion_1.arrayInclusion(value, options);
}
exports.arrayExclusion = arrayExclusion;
