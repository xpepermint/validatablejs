"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
var BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
function stringBase64(value) {
    if (!typeable_1.isString(value))
        return false;
    return BASE64_REGEX.test(value);
}
exports.stringBase64 = stringBase64;
