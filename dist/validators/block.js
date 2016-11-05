"use strict";
const typeable_1 = require('typeable');
function block(v, d) {
    let { block } = d;
    if (typeable_1.isPromise(block)) {
        return Promise.resolve(v).then(block.bind(this));
    }
    else {
        return block.call(this, v, d);
    }
}
exports.block = block;
