const {isString} = require('typeable');
const {isURL} = require('validator');

module.exports = function(str, {protocols=['http', 'https', 'ftp'], requireTld=true, requireProtocol=true, requireValidProtocol=true, allowUnderscores=false, allowTrailingDot=false, allowProtocolRelativeUrls=false}={}) {
  if (isString(str)) {
    return isURL(str, {
      protocols: protocols,
      require_tld: requireTld,
      require_protocol: requireProtocol,
      require_valid_protocol: requireValidProtocol,
      allow_underscores: allowUnderscores,
      allow_trailing_dot: allowTrailingDot,
      allow_protocol_relative_urls: allowProtocolRelativeUrls
    });
  } else {
    return false;
  }
};
