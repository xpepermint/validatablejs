const {isString} = require('typeable');
const {isISBN} = require('validator');

module.exports = function(str, {version}={}) {
  if (isString(str)) {
    return isISBN(str, version);
  } else {
    return false;
  }
};
