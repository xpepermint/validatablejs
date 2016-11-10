"use strict";
var typeable_1 = require("typeable");
function stringLength(value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.bytes, bytes = _c === void 0 ? false : _c, min = _b.min, minOrEqual = _b.minOrEqual, max = _b.max, maxOrEqual = _b.maxOrEqual;
    if (!typeable_1.isString(value))
        return false;
    var len = bytes
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
