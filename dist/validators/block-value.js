"use strict";

module.exports = function (value, _ref) {
  let block = _ref.block;
  let options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return block(value, options);
};