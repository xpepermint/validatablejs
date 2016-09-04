const {isArray} = require('typeable');

module.exports = function(val, {values=[]}={}) {
  if (isArray(values)) {
    return values.findIndex((v) => v === val) !== -1;
  } else {
    return false;
  }
};
