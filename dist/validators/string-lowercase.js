'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringLowercase = stringLowercase;

var _typeable = require('typeable');

function stringLowercase(value) {
  if (!(0, _typeable.isString)(value)) return false;

  return value === value.toLowerCase();
};