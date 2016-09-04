const {isString} = require('typeable');
const {isISIN} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isISIN(str);
  } else {
    return false;
  }
};
