"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringHexColor(value) {
    if (!typeable_1.isString(value))
        return false;
    return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(value);
}
exports.stringHexColor = stringHexColor;
