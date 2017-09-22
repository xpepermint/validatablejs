"use strict";
exports.__esModule = true;
var string_inclusion_1 = require("./string-inclusion");
function stringExclusion(value, options) {
    if (options === void 0) { options = {}; }
    return !string_inclusion_1.stringInclusion(value, options);
}
exports.stringExclusion = stringExclusion;
