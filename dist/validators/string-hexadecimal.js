'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringHexadecimal = stringHexadecimal;

var _typeable = require('typeable');

function stringHexadecimal(value) {
  if (!(0, _typeable.isString)(value)) return false;

  return (/^[0-9A-F]+$/i.test(value)
  );
}