"use strict";
const typeable_1 = require('typeable');
function arrayLength(value, { min, minOrEqual, max, maxOrEqual } = {}) {
    if (!typeable_1.isArray(value))
        return false;
    let size = value.length;
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
