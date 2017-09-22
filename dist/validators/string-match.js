"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringMatch(value, recipe) {
    if (recipe === void 0) { recipe = {}; }
    if (!typeable_1.isString(value))
        return false;
    var regexp = recipe.regexp;
    return regexp.test(value);
}
exports.stringMatch = stringMatch;
;
