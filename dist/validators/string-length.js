"use strict";
const typeable_1 = require('typeable');
function stringLength(v, { bytes = false, min, minOrEqual, max, maxOrEqual } = {}) {
    if (!typeable_1.isString(v)) {
        return false;
    }
    let len = bytes
        ? encodeURI(v).split(/%..|./).length - 1
        : v.length;
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
