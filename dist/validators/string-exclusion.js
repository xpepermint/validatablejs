'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringExclusion = stringExclusion;

var _stringInclusion = require('./string-inclusion');

function stringExclusion(value, recipe) {
  return !(0, _stringInclusion.stringInclusion)(value, recipe);
}