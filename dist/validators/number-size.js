"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function numberSize(value, options) {
    if (options === void 0) { options = {}; }
    if (!typeable_1.isNumber(value))
        return false;
    var min = options.min, minOrEqual = options.minOrEqual, max = options.max, maxOrEqual = options.maxOrEqual;
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
