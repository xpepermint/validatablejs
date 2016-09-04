'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isDate = _require2.isDate;
const isISO8601 = _require2.isISO8601;


function isFormat(str, format) {
  if (!format) return true;

  switch (format) {
    case 'iso8601':
      return isISO8601(str);
    default:
      return false;
  }
}

module.exports = function (str) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  let format = _ref.format;

  if (!isString(str)) return false;
  if (!isDate(str)) return false;
  if (!isFormat(str, format)) return false;
  return true;
};