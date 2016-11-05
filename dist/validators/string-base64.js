"use strict";
const typeable_1 = require('typeable');
const BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
function stringBase64(v) {
    if (!typeable_1.isString(v))
        return false;
    return BASE64_REGEX.test(v);
}
exports.stringBase64 = stringBase64;
