'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const matches = _require2.matches;


module.exports = function (str, _ref) {
  let pattern = _ref.pattern;
  let modifiers = _ref.modifiers;

  if (isString(str)) {
    return matches(str, pattern, modifiers);
  } else {
    return false;
  }
};