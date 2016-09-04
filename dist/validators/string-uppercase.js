'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isUppercase = _require2.isUppercase;


module.exports = function (str) {
  if (isString(str)) {
    return isUppercase(str);
  } else {
    return false;
  }
};