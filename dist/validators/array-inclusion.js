"use strict";
const typeable_1 = require("typeable");
function arrayInclusion(value, recipe = {}) {
    let { values } = recipe;
    if (!typeable_1.isArray(values))
        return false;
    return values.findIndex((i) => i === value) !== -1;
}
exports.arrayInclusion = arrayInclusion;
