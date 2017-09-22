"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringHexadecimal(value) {
    if (!typeable_1.isString(value))
        return false;
    return /^[0-9A-F]+$/i.test(value);
}
exports.stringHexadecimal = stringHexadecimal;
