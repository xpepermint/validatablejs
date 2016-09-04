'use strict';

var _require = require('typeable');

const isAbsent = _require.isAbsent;


module.exports = function (val) {
  return isAbsent(val);
};