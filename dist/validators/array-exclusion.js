"use strict";
var array_inclusion_1 = require("./array-inclusion");
function arrayExclusion(value, recipe) {
    return !array_inclusion_1.arrayInclusion(value, recipe);
}
exports.arrayExclusion = arrayExclusion;
