"use strict";
exports.__esModule = true;
function block(value, options) {
    if (options === void 0) { options = {}; }
    if (!options)
        return false;
    var block = options.block;
    if (block) {
        return block.call(this, value, options);
    }
    return false;
}
exports.block = block;
