const {isString} = require('typeable');
const {isUppercase} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isUppercase(str);
  } else {
    return false;
  }
};
