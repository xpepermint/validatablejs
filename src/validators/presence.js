const {isPresent} = require('typeable');

module.exports = function(val) {
  return isPresent(val);
};
