'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isLength = _require2.isLength;


module.exports = function (str) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$min = _ref.min;
  let min = _ref$min === undefined ? 0 : _ref$min;
  let max = _ref.max;

  if (isString(str)) {
    return isLength(str, { min, max });
  } else {
    return false;
  }
};