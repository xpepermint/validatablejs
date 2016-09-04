'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('mongodb');

const ObjectID = _require2.ObjectID;


module.exports = function (id) {
  return ObjectID.isValid(id);
};