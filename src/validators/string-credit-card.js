const {isString} = require('typeable');
const {isCreditCard} = require('validator');

module.exports = function(str) {
  if (isString(str)) {
    return isCreditCard(str);
  } else {
    return false;
  }
};
