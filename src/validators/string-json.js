const {isString} = require('typeable');
const {isJSON} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isJSON(str);
  } else {
    return false;
  }
};
