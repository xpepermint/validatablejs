const {isString} = require('typeable');
const {isLowercase} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isLowercase(str);
  } else {
    return false;
  }
};
