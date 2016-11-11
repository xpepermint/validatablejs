'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.presence = presence;

var _typeable = require('typeable');

function presence(value) {
  return (0, _typeable.isPresent)(value);
}