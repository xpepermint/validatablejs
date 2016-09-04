'use strict';

var _require = require('typeable');

const isPresent = _require.isPresent;


module.exports = function (val) {
  return isPresent(val);
};