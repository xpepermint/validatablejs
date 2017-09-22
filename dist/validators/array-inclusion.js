"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function arrayInclusion(value, options) {
    if (options === void 0) { options = {}; }
    var values = options.values;
    if (!typeable_1.isArray(values))
        return false;
    return values.indexOf(value) !== -1;
}
exports.arrayInclusion = arrayInclusion;
