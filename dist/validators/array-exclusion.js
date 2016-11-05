"use strict";
const array_inclusion_1 = require('./array-inclusion');
function arrayExclusion(v, d = {}) {
    return !array_inclusion_1.arrayInclusion(v, d);
}
exports.arrayExclusion = arrayExclusion;
