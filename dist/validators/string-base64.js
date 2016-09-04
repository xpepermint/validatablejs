'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isBase64 = _require2.isBase64;


module.exports = function (str) {
  if (isString(str)) {
    return isBase64(str);
  } else {
    return false;
  }
};