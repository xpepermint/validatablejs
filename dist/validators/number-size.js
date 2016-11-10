"use strict";
var typeable_1 = require("typeable");
function numberSize(value, _a) {
    var _b = _a === void 0 ? {} : _a, min = _b.min, minOrEqual = _b.minOrEqual, max = _b.max, maxOrEqual = _b.maxOrEqual;
    if (!typeable_1.isNumber(value))
        return false;
    if (typeable_1.isNumber(min) && !(value > min))
        return false;
    if (typeable_1.isNumber(minOrEqual) && !(value >= minOrEqual))
        return false;
    if (typeable_1.isNumber(max) && !(value < max))
        return false;
    if (typeable_1.isNumber(maxOrEqual) && !(value <= maxOrEqual))
        return false;
    return true;
}
exports.numberSize = numberSize;
