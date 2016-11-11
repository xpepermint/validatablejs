'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringUUID = stringUUID;

var _typeable = require('typeable');

var V1_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var V2_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var V3_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var V5_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function stringUUID(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      version = _ref.version;

  if (!(0, _typeable.isString)(value)) return false;

  switch (version) {
    case 1:
      return V1_REGEX.test(value);
    case 2:
      return V2_REGEX.test(value);
    case 3:
      return V3_REGEX.test(value);
    case 4:
      return V4_REGEX.test(value);
    case 5:
      return V5_REGEX.test(value);
  }

  return V1_REGEX.test(value) || V2_REGEX.test(value) || V3_REGEX.test(value) || V4_REGEX.test(value) || V5_REGEX.test(value);
};