'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.absence = absence;

var _typeable = require('typeable');

function absence(value) {
  return (0, _typeable.isAbsent)(value);
}