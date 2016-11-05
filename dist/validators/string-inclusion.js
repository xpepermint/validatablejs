"use strict";
const typeable_1 = require('typeable');
function stringInclusion(value, { seed } = {}) {
    if (!typeable_1.isString(value))
        return false;
    return value.indexOf(typeable_1.toString(seed)) >= 0;
}
exports.stringInclusion = stringInclusion;
