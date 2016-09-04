const {isString} = require('typeable');
const {isHexadecimal} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isHexadecimal(str);
  } else {
    return false;
  }
};
