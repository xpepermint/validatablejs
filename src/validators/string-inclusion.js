const {isString} = require('typeable');
const {contains} = require('validator');

module.exports = function(str, {seed}) {
  if (isString(str)) {
    return contains(str, seed);
  } else {
    return false;
  }
};
