"use strict";
var typeable_1 = require("typeable");
function stringInclusion(value, _a) {
    var seed = (_a === void 0 ? {} : _a).seed;
    if (!typeable_1.isString(value))
        return false;
    return value.indexOf(typeable_1.toString(seed)) >= 0;
}
exports.stringInclusion = stringInclusion;
