"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringUppercase(value) {
    if (!typeable_1.isString(value))
        return false;
    return value === value.toUpperCase();
}
exports.stringUppercase = stringUppercase;
;
