const {isString} = require('typeable');
const {isHexColor} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isHexColor(str);
  } else {
    return false;
  }
};
