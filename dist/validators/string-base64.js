'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringBase64 = stringBase64;

var _typeable = require('typeable');

var BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;

function stringBase64(value) {
  if (!(0, _typeable.isString)(value)) return false;

  return BASE64_REGEX.test(value);
}