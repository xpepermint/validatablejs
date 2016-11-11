'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayLength = arrayLength;

var _typeable = require('typeable');

function arrayLength(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      min = _ref.min,
      minOrEqual = _ref.minOrEqual,
      max = _ref.max,
      maxOrEqual = _ref.maxOrEqual;

  if (!(0, _typeable.isArray)(value)) return false;

  var size = value.length;
  if ((0, _typeable.isNumber)(min) && !(size > min)) return false;
  if ((0, _typeable.isNumber)(minOrEqual) && !(size >= minOrEqual)) return false;
  if ((0, _typeable.isNumber)(max) && !(size < max)) return false;
  if ((0, _typeable.isNumber)(maxOrEqual) && !(size <= maxOrEqual)) return false;
  return true;
}