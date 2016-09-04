'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isLowercase = _require2.isLowercase;


module.exports = function (str) {
  if (isString(str)) {
    return isLowercase(str);
  } else {
    return false;
  }
};