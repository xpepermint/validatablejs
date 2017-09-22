"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringInclusion(value, options) {
    if (options === void 0) { options = {}; }
    if (!typeable_1.isString(value))
        return false;
    var seed = options.seed;
    return value.indexOf(typeable_1.toString(seed)) >= 0;
}
exports.stringInclusion = stringInclusion;
