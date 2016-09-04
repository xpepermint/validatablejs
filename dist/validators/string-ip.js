'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isIP = _require2.isIP;


module.exports = function (str) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  let version = _ref.version;

  if (isString(str)) {
    return isIP(str, version);
  } else {
    return false;
  }
};