'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayExclusion = arrayExclusion;

var _arrayInclusion = require('./array-inclusion');

function arrayExclusion(value, recipe) {
  return !(0, _arrayInclusion.arrayInclusion)(value, recipe);
}