"use strict";
const typeable_1 = require('typeable');
function stringInclusion(v, d = {}) {
    if (!typeable_1.isString(v)) {
        return false;
    }
    return v.indexOf(typeable_1.toString(d.seed)) >= 0;
}
exports.stringInclusion = stringInclusion;
