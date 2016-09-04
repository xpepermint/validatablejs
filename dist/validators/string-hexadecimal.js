'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isHexadecimal = _require2.isHexadecimal;


module.exports = function (str) {
  if (isString(str)) {
    return isHexadecimal(str);
  } else {
    return false;
  }
};