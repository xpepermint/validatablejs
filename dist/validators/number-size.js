"use strict";
const typeable_1 = require('typeable');
function numberSize(v, d = {}) {
    let { min, minOrEqual, max, maxOrEqual } = d;
    if (!typeable_1.isNumber(v))
        return false;
    if (typeable_1.isNumber(min) && !(v > min))
        return false;
    if (typeable_1.isNumber(minOrEqual) && !(v >= minOrEqual))
        return false;
    if (typeable_1.isNumber(max) && !(v < max))
        return false;
    if (typeable_1.isNumber(maxOrEqual) && !(v <= maxOrEqual))
        return false;
    return true;
}
exports.numberSize = numberSize;
