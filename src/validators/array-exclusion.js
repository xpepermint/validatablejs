const inArray = require('./array-inclusion');

module.exports = function(val, options={}) {
  return !inArray(val, options);
};
