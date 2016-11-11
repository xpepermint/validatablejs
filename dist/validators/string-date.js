'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringDate = stringDate;

var _typeable = require('typeable');

var ISO8601_REGEX = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

function stringDate(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      iso = _ref.iso;

  if (!(0, _typeable.isString)(value)) return false;

  var date = Date.parse(value);
  if (!date) return false;

  if (iso) {
    return ISO8601_REGEX.test(value);
  }
  return true;
}