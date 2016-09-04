const {isString} = require('typeable');
const {isIP} = require('validator');

module.exports = function(str, {version}={}) {
  if (isString(str)) {
    return isIP(str, version);
  } else {
    return false;
  }
};
