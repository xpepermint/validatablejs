"use strict";
var typeable_1 = require("typeable");
function arrayLength(value, _a) {
    var _b = _a === void 0 ? {} : _a, min = _b.min, minOrEqual = _b.minOrEqual, max = _b.max, maxOrEqual = _b.maxOrEqual;
    if (!typeable_1.isArray(value))
        return false;
    var size = value.length;
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
