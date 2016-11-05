"use strict";
const typeable_1 = require('typeable');
function arrayInclusion(v, d = {}) {
    let { values } = d;
    if (!typeable_1.isArray(values))
        return false;
    return values.findIndex((i) => i === v) !== -1;
}
exports.arrayInclusion = arrayInclusion;
