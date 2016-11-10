"use strict";
const typeable_1 = require("typeable");
const string_hexadecimal_1 = require("./string-hexadecimal");
function BSONObjectID(v) {
    v = typeable_1.toString(v);
    return (string_hexadecimal_1.stringHexadecimal(v)
        && v.length === 24);
}
exports.BSONObjectID = BSONObjectID;
