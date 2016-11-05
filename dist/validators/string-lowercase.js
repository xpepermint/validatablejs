"use strict";
const typeable_1 = require('typeable');
/**
 * Validates that the specified field is lowercase.
 */
function stringLowercase(v) {
    if (!typeable_1.isString(v)) {
        return false;
    }
    return v === v.toLowerCase();
}
exports.stringLowercase = stringLowercase;
;
