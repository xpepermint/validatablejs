'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberSize = numberSize;

var _typeable = require('typeable');

function numberSize(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      min = _ref.min,
      minOrEqual = _ref.minOrEqual,
      max = _ref.max,
      maxOrEqual = _ref.maxOrEqual;

  if (!(0, _typeable.isNumber)(value)) return false;

  if ((0, _typeable.isNumber)(min) && !(value > min)) return false;
  if ((0, _typeable.isNumber)(minOrEqual) && !(value >= minOrEqual)) return false;
  if ((0, _typeable.isNumber)(max) && !(value < max)) return false;
  if ((0, _typeable.isNumber)(maxOrEqual) && !(value <= maxOrEqual)) return false;
  return true;
}