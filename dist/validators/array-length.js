"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function arrayLength(value, options) {
    if (options === void 0) { options = {}; }
    if (!typeable_1.isArray(value))
        return false;
    var size = value.length;
    var min = options.min, minOrEqual = options.minOrEqual, max = options.max, maxOrEqual = options.maxOrEqual;
    if (typeable_1.isNumber(min) && !(size > min))
        return false;
    if (typeable_1.isNumber(minOrEqual) && !(size >= minOrEqual))
        return false;
    if (typeable_1.isNumber(max) && !(size < max))
        return false;
    if (typeable_1.isNumber(maxOrEqual) && !(size <= maxOrEqual))
        return false;
    return true;
}
exports.arrayLength = arrayLength;
