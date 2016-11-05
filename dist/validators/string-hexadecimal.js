"use strict";
const typeable_1 = require('typeable');
function stringHexadecimal(v) {
    if (typeable_1.isString(v)) {
        return /^[0-9A-F]+$/i.test(v);
    }
    else {
        return false;
    }
}
exports.stringHexadecimal = stringHexadecimal;
