"use strict";
const typeable_1 = require('typeable');
/**
* Validates the size of a number.
*/
function stringJSON(v) {
    if (!typeable_1.isString(v)) {
        return false;
    }
    try {
        let obj = JSON.parse(v);
        return !!obj && typeof obj === 'object';
    }
    catch (e) { }
    return false;
}
exports.stringJSON = stringJSON;
;
