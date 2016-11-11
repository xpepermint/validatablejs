'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.stringJSON = stringJSON;

var _typeable = require('typeable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringJSON(value) {
  if (!(0, _typeable.isString)(value)) return false;

  try {
    var obj = JSON.parse(value);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
  } catch (e) {}
  return false;
};