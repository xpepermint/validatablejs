const {isString} = require('typeable');
const {isUUID} = require('validator');

module.exports = function(str, {version}={}) {
  if (isString(str)) {
    return isUUID(str, version);
  } else {
    return false;
  }
};
