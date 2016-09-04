'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const contains = _require2.contains;


module.exports = function (str, _ref) {
  let seed = _ref.seed;

  if (isString(str)) {
    return contains(str, seed);
  } else {
    return false;
  }
};