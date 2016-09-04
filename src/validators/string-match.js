const {isString} = require('typeable');
const {matches} = require('validator');

module.exports = function(str, {pattern, modifiers}) {
  if (isString(str)) {
    return matches(str, pattern, modifiers);
  } else {
    return false;
  }
};
