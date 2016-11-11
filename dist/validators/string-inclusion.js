'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringInclusion = stringInclusion;

var _typeable = require('typeable');

function stringInclusion(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      seed = _ref.seed;

  if (!(0, _typeable.isString)(value)) return false;

  return value.indexOf((0, _typeable.toString)(seed)) >= 0;
}