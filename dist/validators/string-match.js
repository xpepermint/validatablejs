"use strict";
const typeable_1 = require("typeable");
function stringMatch(value, { regexp } = {}) {
    if (!typeable_1.isString(value))
        return false;
    return regexp.test(value);
}
exports.stringMatch = stringMatch;
;
