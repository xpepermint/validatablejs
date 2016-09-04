const {isString} = require('typeable');
const {isEmail} = require('validator');

module.exports = function(str, {allowDisplayName=false, allowUtf8LocalPart=false, requireTld=true}={}) {
  if (isString(str)) {
    return isEmail(str, {
      allow_display_name: allowDisplayName,
      allow_utf8_local_part: allowUtf8LocalPart,
      require_tld: requireTld
    });
  } else {
    return false;
  }
};
