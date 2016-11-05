"use strict";
const typeable_1 = require('typeable');
/**
 * Validates that the specified field matches the pattern.
 */
function stringMatch(v, d) {
    if (!typeable_1.isString(v)) {
        return false;
    }
    return d.regexp.test(v);
}
exports.stringMatch = stringMatch;
;
