'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BSONObjectID = BSONObjectID;

var _typeable = require('typeable');

var _stringHexadecimal = require('./string-hexadecimal');

function BSONObjectID(v) {
  v = (0, _typeable.toString)(v);

  return (0, _stringHexadecimal.stringHexadecimal)(v) && v.length === 24;
}