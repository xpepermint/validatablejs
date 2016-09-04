const {isString} = require('typeable');
const {isBase64} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isBase64(str);
  } else {
    return false;
  }
};
