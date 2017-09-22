"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
var string_hexadecimal_1 = require("./string-hexadecimal");
function BSONObjectID(value) {
    value = typeable_1.toString(value);
    return (string_hexadecimal_1.stringHexadecimal(value)
        && value.length === 24);
}
exports.BSONObjectID = BSONObjectID;
