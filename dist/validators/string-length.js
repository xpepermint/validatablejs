'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringLength = stringLength;

var _typeable = require('typeable');

function stringLength(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$bytes = _ref.bytes,
      bytes = _ref$bytes === undefined ? false : _ref$bytes,
      min = _ref.min,
      minOrEqual = _ref.minOrEqual,
      max = _ref.max,
      maxOrEqual = _ref.maxOrEqual;

  if (!(0, _typeable.isString)(value)) return false;

  var len = bytes ? encodeURI(value).split(/%..|./).length - 1 : value.length;

  if ((0, _typeable.isNumber)(min) && !(len > min)) return false;
  if ((0, _typeable.isNumber)(minOrEqual) && !(len >= minOrEqual)) return false;
  if ((0, _typeable.isNumber)(max) && !(len < max)) return false;
  if ((0, _typeable.isNumber)(maxOrEqual) && !(len <= maxOrEqual)) return false;
  return true;
}