const {isString} = require('typeable');
const {isLength} = require('validator');

module.exports = function(str, {min=0, max}={}) {
  if (isString(str)) {
    return isLength(str, {min, max});
  } else {
    return false;
  }
};
