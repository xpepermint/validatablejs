'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringMatch = stringMatch;

var _typeable = require('typeable');

function stringMatch(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      regexp = _ref.regexp;

  if (!(0, _typeable.isString)(value)) return false;

  return regexp.test(value);
};