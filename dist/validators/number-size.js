"use strict";
const typeable_1 = require("typeable");
function numberSize(value, { min, minOrEqual, max, maxOrEqual } = {}) {
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
