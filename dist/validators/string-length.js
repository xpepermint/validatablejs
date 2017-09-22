"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringLength(value, recipe) {
    if (recipe === void 0) { recipe = {}; }
    if (!typeable_1.isString(value))
        return false;
    var _a = recipe.bytes, bytes = _a === void 0 ? false : _a, min = recipe.min, minOrEqual = recipe.minOrEqual, max = recipe.max, maxOrEqual = recipe.maxOrEqual;
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
