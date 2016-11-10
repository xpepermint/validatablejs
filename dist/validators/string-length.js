"use strict";
const typeable_1 = require("typeable");
function stringLength(value, { bytes = false, min, minOrEqual, max, maxOrEqual } = {}) {
    if (!typeable_1.isString(value))
        return false;
    let len = bytes
        ? encodeURI(value).split(/%..|./).length - 1
        : value.length;
    if (typeable_1.isNumber(min) && !(len > min))
        return false;
    if (typeable_1.isNumber(minOrEqual) && !(len >= minOrEqual))
        return false;
    if (typeable_1.isNumber(max) && !(len < max))
        return false;
    if (typeable_1.isNumber(maxOrEqual) && !(len <= maxOrEqual))
        return false;
    return true;
}
exports.stringLength = stringLength;
