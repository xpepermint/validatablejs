'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isHexColor = _require2.isHexColor;


module.exports = function (str) {
  if (isString(str)) {
    return isHexColor(str);
  } else {
    return false;
  }
};