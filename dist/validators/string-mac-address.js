'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isMACAddress = _require2.isMACAddress;


module.exports = function (str) {
  if (isString(str)) {
    return isMACAddress(str);
  } else {
    return false;
  }
};