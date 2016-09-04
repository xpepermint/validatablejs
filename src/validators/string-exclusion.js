const inString = require('./string-inclusion');

module.exports = function(val, options={}) {
  return !inString(val, options);
};
