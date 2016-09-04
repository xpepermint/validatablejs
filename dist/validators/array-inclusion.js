'use strict';

var _require = require('typeable');

const isArray = _require.isArray;


module.exports = function (val) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$values = _ref.values;
  let values = _ref$values === undefined ? [] : _ref$values;

  if (isArray(values)) {
    return values.findIndex(v => v === val) !== -1;
  } else {
    return false;
  }
};