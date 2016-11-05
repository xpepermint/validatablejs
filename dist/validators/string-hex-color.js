"use strict";
const typeable_1 = require('typeable');
/**
* Validates that the specified field is a hexadecimal color string.
*/
function stringHexColor(v) {
    if (!typeable_1.isString(v)) {
        return false;
    }
    return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(v);
}
exports.stringHexColor = stringHexColor;
;
