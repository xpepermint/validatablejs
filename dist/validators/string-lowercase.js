"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringLowercase(value) {
    if (!typeable_1.isString(value))
        return false;
    return value === value.toLowerCase();
}
exports.stringLowercase = stringLowercase;
;
