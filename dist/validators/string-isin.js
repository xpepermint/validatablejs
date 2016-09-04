'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isISIN = _require2.isISIN;


module.exports = function (str) {
  if (isString(str)) {
    return isISIN(str);
  } else {
    return false;
  }
};