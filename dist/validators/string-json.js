"use strict";
const typeable_1 = require('typeable');
function stringJSON(value) {
    if (!typeable_1.isString(value))
        return false;
    try {
        let obj = JSON.parse(value);
        return !!obj && typeof obj === 'object';
    }
    catch (e) { }
    return false;
}
exports.stringJSON = stringJSON;
;
