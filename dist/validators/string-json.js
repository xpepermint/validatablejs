'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isJSON = _require2.isJSON;


module.exports = function (str) {
  if (isString(str)) {
    return isJSON(str);
  } else {
    return false;
  }
};