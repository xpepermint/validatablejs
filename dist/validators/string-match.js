"use strict";
var typeable_1 = require("typeable");
function stringMatch(value, _a) {
    var regexp = (_a === void 0 ? {} : _a).regexp;
    if (!typeable_1.isString(value))
        return false;
    return regexp.test(value);
}
exports.stringMatch = stringMatch;
;
