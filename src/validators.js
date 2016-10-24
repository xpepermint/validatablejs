import {
  isString,
  isNumber,
  isInteger,
  isFloat,
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
  isUUID,
  isMongoId
} from 'validator';

export function absence (v) {
  return isAbsent(v);
};

export function arrayInclusion (v, {values=[]}={}) {
  if (isArray(values)) {
    return values.findIndex((i) => i === v) !== -1;
  }
  else {
    return false;
  }
};

export function arrayExclusion (v, definition={}) {
  return !arrayInclusion(v, definition);
};

export function blockValue (v, definition={}) {
  return definition.block.call(this, v, definition);
};

export function BSONObjectID (v) {
  if (isString(v)) {
    return isMongoId(v);
  }
  else if (v.toString) {
    return isMongoId(v.toString());
  }
  return false;
};

export function numberSize (v, {min, minOrEqual, max, maxOrEqual}={}) {
  if (isNumber(v)) {
    if (isNumber(min) && !(v > min)) return false;
    if (isNumber(minOrEqual) && !(v >= minOrEqual)) return false;
    if (isNumber(max) && !(v < max)) return false;
    if (isNumber(maxOrEqual) && !(v <= maxOrEqual)) return false;
    return true;
  }
  return false;
}

export function presence (v) {
  return isPresent(v);
};

export function stringBase64 (v) {
  return isString(v) ? isBase64(v) : false;
};

export function stringCreditCard (v) {
  return isString(v) ? isCreditCard(v) : false;
};

export function stringDate (v, {format}={}) {
  function isFormat (v, format) {
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

export function stringEmail (v, {allowDisplayName=false, allowUtf8LocalPart=false, requireTld=true}={}) {
  if (isString(v)) {
    return isEmail(v, {
      allow_display_name: allowDisplayName,
      allow_utf8_local_part: allowUtf8LocalPart,
      require_tld: requireTld
    });
  }
  return false;
};

export function stringInclusion (v, {seed}) {
  if (isString(v)) {
    return contains(v, seed);
  }
  return false;
};

export function stringExclusion(v, definition={}) {
  return !stringInclusion(v, definition);
};

export function stringFQDN (v, {requireTld=true, allowUnderscores=false, allowTrailingDot=false}={}) {
  if (isString(v)) {
    return isFQDN(v, {
      require_tld: requireTld,
      allow_underscores: allowUnderscores,
      allow_trailing_dot: allowTrailingDot
    });
  }
  return false;
};

export function stringHexColor (v) {
  return isString(v) ? isHexColor(v) : false;
};

export function stringHexadecimal (v) {
  return isString(v) ? isHexadecimal(v) : false;
};

export function stringIP (v, {version}={}) {
  return isString(v) ? isIP(v, version) : false;
};

export function stringISBN (v, {version}={}) {
  return isString(v) ? isISBN(v, version) : false;
};

export function stringISIN (v) {
  return isString(v) ? isISIN(v) : false;
};

export function stringJSON (v) {
  return isString(v) ? isJSON(v) : false;
};

export function stringLength (v, {min=0, max}={}) {
  return isString(v) ? isLength(v, {min, max}) : false;
};

export function stringLowercase (v) {
  return isString(v) ? isLowercase(v) : false;
};

export function stringMACAddress (v) {
  return isString(v) ? isMACAddress(v) : false;
};

export function stringMatch (v, {pattern, modifiers}) {
  return isString(v) ? matches(v, pattern, modifiers) : false;
};

export function stringUppercase (v) {
  return isString(v) ? isUppercase(v) : false;
};

export function stringURL (v, {protocols=['http', 'https', 'ftp'], requireTld=true, requireProtocol=true, requireValidProtocol=true, allowUnderscores=false, allowTrailingDot=false, allowProtocolRelativeUrls=false}={}) {
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
  }
  return false;
};

export function stringUUID (v, {version}={}) {
  return isString(v) ? isUUID(v, version) : false;
};
