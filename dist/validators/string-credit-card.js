'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isCreditCard = _require2.isCreditCard;


module.exports = function (str) {
  if (isString(str)) {
    return isCreditCard(str);
  } else {
    return false;
  }
};