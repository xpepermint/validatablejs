'use strict';

const inString = require('./string-inclusion');

module.exports = function (val) {
  let options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return !inString(val, options);
};