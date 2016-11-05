"use strict";
const typeable_1 = require('typeable');
/**
 * Validates that the specified field is uppercase.
 */
function stringUppercase(v) {
    if (!typeable_1.isString(v)) {
        return false;
    }
    return v === v.toUpperCase();
}
exports.stringUppercase = stringUppercase;
;
