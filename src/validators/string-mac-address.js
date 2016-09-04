const {isString} = require('typeable');
const {isMACAddress} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isMACAddress(str);
  } else {
    return false;
  }
};
