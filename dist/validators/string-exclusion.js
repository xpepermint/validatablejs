"use strict";
const string_inclusion_1 = require('./string-inclusion');
function stringExclusion(v, d = {}) {
    return !string_inclusion_1.stringInclusion(v, d);
}
exports.stringExclusion = stringExclusion;
