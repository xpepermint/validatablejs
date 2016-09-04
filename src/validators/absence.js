const {isAbsent} = require('typeable');

module.exports = function(val) {
  return isAbsent(val);
};
