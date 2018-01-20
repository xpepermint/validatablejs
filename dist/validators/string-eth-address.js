"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringETHAddress(value) {
    if (!typeable_1.isString(value))
        return false;
    return /^0x[a-fA-F0-9]{40}$/i.test(value);
}
exports.stringETHAddress = stringETHAddress;
