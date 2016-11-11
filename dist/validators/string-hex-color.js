'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringHexColor = stringHexColor;

var _typeable = require('typeable');

function stringHexColor(value) {
  if (!(0, _typeable.isString)(value)) return false;

  return (/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(value)
  );
}