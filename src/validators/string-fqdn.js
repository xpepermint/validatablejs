const {isString} = require('typeable');
const {isFQDN} = require('validator');

module.exports = function(str, {requireTld=true, allowUnderscores=false, allowTrailingDot=false}={}) {
  if (isString(str)) {
    return isFQDN(str, {
      require_tld: requireTld,
      allow_underscores: allowUnderscores,
      allow_trailing_dot: allowTrailingDot
    });
  } else {
    return false;
  }
};
