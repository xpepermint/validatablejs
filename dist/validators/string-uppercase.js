'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringUppercase = stringUppercase;

var _typeable = require('typeable');

function stringUppercase(value) {
  if (!(0, _typeable.isString)(value)) return false;

  return value === value.toUpperCase();
};