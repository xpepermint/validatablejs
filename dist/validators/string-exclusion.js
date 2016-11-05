"use strict";
const string_inclusion_1 = require('./string-inclusion');
function stringExclusion(value, recipe) {
    return !string_inclusion_1.stringInclusion(value, recipe);
}
exports.stringExclusion = stringExclusion;
