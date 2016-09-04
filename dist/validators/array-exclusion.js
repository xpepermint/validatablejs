'use strict';

const inArray = require('./array-inclusion');

module.exports = function (val) {
  let options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return !inArray(val, options);
};