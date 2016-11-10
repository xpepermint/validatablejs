"use strict";
var typeable_1 = require("typeable");
function arrayInclusion(value, recipe) {
    if (recipe === void 0) { recipe = {}; }
    var values = recipe.values;
    if (!typeable_1.isArray(values))
        return false;
    return values.findIndex(function (i) { return i === value; }) !== -1;
}
exports.arrayInclusion = arrayInclusion;
