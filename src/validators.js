import {
  isString,
  isPresent,
  isAbsent,
  isArray
} from 'typeable';

import {
  isBase64,
  isCreditCard,
  isDate,
  isISO8601,
  isEmail,
  isFQDN,
  isHexColor,
  isHexadecimal,
  contains,
  isIP,
  isISBN,
  isISIN,
  isJSON,
  isLength,
  isLowercase,
  isMACAddress,
  matches,
  isUppercase,
  isURL,
  isUUID
} from 'validator';

import {
  ObjectID
} from 'mongodb';

export function absence(v) {
  return isAbsent(v);
};

export function arrayInclusion(v, {values=[]}={}) {
  if (isArray(values)) {
    return values.findIndex((i) => i === v) !== -1;
  } else {
    return false;
  }
};

export function arrayExclusion(v, options={}) {
  return !arrayInclusion(v, options);
};

export function blockValue(v, {block}, options={}) {
  return block(v, options);
};

export function BSONObjectID(v) {
  return ObjectID.isValid(v);
};

export function presence(v) {
  return isPresent(v);
};

export function stringBase64(v) {
  if (isString(v)) {
    return isBase64(v);
  } else {
    return false;
  }
};

export function stringCreditCard(v) {
  if (isString(v)) {
    return isCreditCard(v);
  } else {
    return false;
  }
};

export function stringDate(v, {format}={}) {
  function isFormat(v, format) {
    if (!format) return true;
    switch(format) {
      case 'iso8601':
        return isISO8601(v);
      default:
        return false;
    }
  }
  if (!isString(v)) return false;
  if (!isDate(v)) return false;
  if (!isFormat(v, format)) return false;
  return true;
};

export function stringEmail(v, {allowDisplayName=false, allowUtf8LocalPart=false, requireTld=true}={}) {
  if (isString(v)) {
    return isEmail(v, {
      allow_display_name: allowDisplayName,
      allow_utf8_local_part: allowUtf8LocalPart,
      require_tld: requireTld
    });
  } else {
    return false;
  }
};

export function stringInclusion(v, {seed}) {
  if (isString(v)) {
    return contains(v, seed);
  } else {
    return false;
  }
};

export function stringExclusion(v, options={}) {
  return !stringInclusion(v, options);
};

export function stringFQDN(v, {requireTld=true, allowUnderscores=false, allowTrailingDot=false}={}) {
  if (isString(v)) {
    return isFQDN(v, {
      require_tld: requireTld,
      allow_underscores: allowUnderscores,
      allow_trailing_dot: allowTrailingDot
    });
  } else {
    return false;
  }
};

export function stringHexColor(v) {
  if (isString(v)) {
    return isHexColor(v);
  } else {
    return false;
  }
};

export function stringHexadecimal(v) {
  if (isString(v)) {
    return isHexadecimal(v);
  } else {
    return false;
  }
};

export function stringIP(v, {version}={}) {
  if (isString(v)) {
    return isIP(v, version);
  } else {
    return false;
  }
};

export function stringISBN(v, {version}={}) {
  if (isString(v)) {
    return isISBN(v, version);
  } else {
    return false;
  }
};

export function stringISIN(v) {
  if (isString(v)) {
    return isISIN(v);
  } else {
    return false;
  }
};

export function stringJSON(v) {
  if (isString(v)) {
    return isJSON(v);
  } else {
    return false;
  }
};

export function stringLength(v, {min=0, max}={}) {
  if (isString(v)) {
    return isLength(v, {min, max});
  } else {
    return false;
  }
};

export function stringLowercase(v) {
  if (isString(v)) {
    return isLowercase(v);
  } else {
    return false;
  }
};

export function stringMACAddress(v) {
  if (isString(v)) {
    return isMACAddress(v);
  } else {
    return false;
  }
};

export function stringMatch(v, {pattern, modifiers}) {
  if (isString(v)) {
    return matches(v, pattern, modifiers);
  } else {
    return false;
  }
};

export function stringUppercase(c) {
  if (isString(c)) {
    return isUppercase(c);
  } else {
    return false;
  }
};

export function stringURL(v, {protocols=['http', 'https', 'ftp'], requireTld=true, requireProtocol=true, requireValidProtocol=true, allowUnderscores=false, allowTrailingDot=false, allowProtocolRelativeUrls=false}={}) {
  if (isString(v)) {
    return isURL(v, {
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

export function stringUUID(v, {version}={}) {
  if (isString(v)) {
    return isUUID(v, version);
  } else {
    return false;
  }
};
