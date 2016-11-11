'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayInclusion = arrayInclusion;

var _typeable = require('typeable');

function arrayInclusion(value) {
  var recipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var values = recipe.values;


  if (!(0, _typeable.isArray)(values)) return false;

  return values.findIndex(function (i) {
    return i === value;
  }) !== -1;
}