'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.absence = absence;
exports.arrayInclusion = arrayInclusion;
exports.arrayExclusion = arrayExclusion;
exports.blockValue = blockValue;
exports.BSONObjectID = BSONObjectID;
exports.numberSize = numberSize;
exports.presence = presence;
exports.stringBase64 = stringBase64;
exports.stringCreditCard = stringCreditCard;
exports.stringDate = stringDate;
exports.stringEmail = stringEmail;
exports.stringInclusion = stringInclusion;
exports.stringExclusion = stringExclusion;
exports.stringFQDN = stringFQDN;
exports.stringHexColor = stringHexColor;
exports.stringHexadecimal = stringHexadecimal;
exports.stringIP = stringIP;
exports.stringISBN = stringISBN;
exports.stringISIN = stringISIN;
exports.stringJSON = stringJSON;
exports.stringLength = stringLength;
exports.stringLowercase = stringLowercase;
exports.stringMACAddress = stringMACAddress;
exports.stringMatch = stringMatch;
exports.stringUppercase = stringUppercase;
exports.stringURL = stringURL;
exports.stringUUID = stringUUID;

var _typeable = require('typeable');

var _validator = require('validator');

var _mongodb = require('mongodb');

function absence(v) {
  return (0, _typeable.isAbsent)(v);
};

function arrayInclusion(v) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$values = _ref.values;
  let values = _ref$values === undefined ? [] : _ref$values;

  if ((0, _typeable.isArray)(values)) {
    return values.findIndex(i => i === v) !== -1;
  } else {
    return false;
  }
};

function arrayExclusion(v) {
  let options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return !arrayInclusion(v, options);
};

function blockValue(v, _ref2) {
  let block = _ref2.block;
  let options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return block(v, options);
};

function BSONObjectID(v) {
  return _mongodb.ObjectID.isValid(v);
};

function numberSize(v) {
  var _ref3 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  let min = _ref3.min;
  let minOrEqual = _ref3.minOrEqual;
  let max = _ref3.max;
  let maxOrEqual = _ref3.maxOrEqual;

  if ((0, _typeable.isNumber)(v)) {
    if ((0, _typeable.isNumber)(min) && !(v > min)) return false;
    if ((0, _typeable.isNumber)(minOrEqual) && !(v >= minOrEqual)) return false;
    if ((0, _typeable.isNumber)(max) && !(v < max)) return false;
    if ((0, _typeable.isNumber)(maxOrEqual) && !(v <= maxOrEqual)) return false;
    return true;
  } else {
    return false;
  }
}

function presence(v) {
  return (0, _typeable.isPresent)(v);
};

function stringBase64(v) {
  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isBase64)(v);
  } else {
    return false;
  }
};

function stringCreditCard(v) {
  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isCreditCard)(v);
  } else {
    return false;
  }
};

function stringDate(v) {
  var _ref4 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  let format = _ref4.format;

  function isFormat(v, format) {
    if (!format) return true;
    switch (format) {
      case 'iso8601':
        return (0, _validator.isISO8601)(v);
      default:
        return false;
    }
  }
  if (!(0, _typeable.isString)(v)) return false;
  if (!(0, _validator.isDate)(v)) return false;
  if (!isFormat(v, format)) return false;
  return true;
};

function stringEmail(v) {
  var _ref5 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref5$allowDisplayNam = _ref5.allowDisplayName;
  let allowDisplayName = _ref5$allowDisplayNam === undefined ? false : _ref5$allowDisplayNam;
  var _ref5$allowUtf8LocalP = _ref5.allowUtf8LocalPart;
  let allowUtf8LocalPart = _ref5$allowUtf8LocalP === undefined ? false : _ref5$allowUtf8LocalP;
  var _ref5$requireTld = _ref5.requireTld;
  let requireTld = _ref5$requireTld === undefined ? true : _ref5$requireTld;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isEmail)(v, {
      allow_display_name: allowDisplayName,
      allow_utf8_local_part: allowUtf8LocalPart,
      require_tld: requireTld
    });
  } else {
    return false;
  }
};

function stringInclusion(v, _ref6) {
  let seed = _ref6.seed;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.contains)(v, seed);
  } else {
    return false;
  }
};

function stringExclusion(v) {
  let options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return !stringInclusion(v, options);
};

function stringFQDN(v) {
  var _ref7 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref7$requireTld = _ref7.requireTld;
  let requireTld = _ref7$requireTld === undefined ? true : _ref7$requireTld;
  var _ref7$allowUnderscore = _ref7.allowUnderscores;
  let allowUnderscores = _ref7$allowUnderscore === undefined ? false : _ref7$allowUnderscore;
  var _ref7$allowTrailingDo = _ref7.allowTrailingDot;
  let allowTrailingDot = _ref7$allowTrailingDo === undefined ? false : _ref7$allowTrailingDo;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isFQDN)(v, {
      require_tld: requireTld,
      allow_underscores: allowUnderscores,
      allow_trailing_dot: allowTrailingDot
    });
  } else {
    return false;
  }
};

function stringHexColor(v) {
  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isHexColor)(v);
  } else {
    return false;
  }
};

function stringHexadecimal(v) {
  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isHexadecimal)(v);
  } else {
    return false;
  }
};

function stringIP(v) {
  var _ref8 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  let version = _ref8.version;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isIP)(v, version);
  } else {
    return false;
  }
};

function stringISBN(v) {
  var _ref9 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  let version = _ref9.version;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isISBN)(v, version);
  } else {
    return false;
  }
};

function stringISIN(v) {
  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isISIN)(v);
  } else {
    return false;
  }
};

function stringJSON(v) {
  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isJSON)(v);
  } else {
    return false;
  }
};

function stringLength(v) {
  var _ref10 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref10$min = _ref10.min;
  let min = _ref10$min === undefined ? 0 : _ref10$min;
  let max = _ref10.max;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isLength)(v, { min, max });
  } else {
    return false;
  }
};

function stringLowercase(v) {
  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isLowercase)(v);
  } else {
    return false;
  }
};

function stringMACAddress(v) {
  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isMACAddress)(v);
  } else {
    return false;
  }
};

function stringMatch(v, _ref11) {
  let pattern = _ref11.pattern;
  let modifiers = _ref11.modifiers;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.matches)(v, pattern, modifiers);
  } else {
    return false;
  }
};

function stringUppercase(c) {
  if ((0, _typeable.isString)(c)) {
    return (0, _validator.isUppercase)(c);
  } else {
    return false;
  }
};

function stringURL(v) {
  var _ref12 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref12$protocols = _ref12.protocols;
  let protocols = _ref12$protocols === undefined ? ['http', 'https', 'ftp'] : _ref12$protocols;
  var _ref12$requireTld = _ref12.requireTld;
  let requireTld = _ref12$requireTld === undefined ? true : _ref12$requireTld;
  var _ref12$requireProtoco = _ref12.requireProtocol;
  let requireProtocol = _ref12$requireProtoco === undefined ? true : _ref12$requireProtoco;
  var _ref12$requireValidPr = _ref12.requireValidProtocol;
  let requireValidProtocol = _ref12$requireValidPr === undefined ? true : _ref12$requireValidPr;
  var _ref12$allowUnderscor = _ref12.allowUnderscores;
  let allowUnderscores = _ref12$allowUnderscor === undefined ? false : _ref12$allowUnderscor;
  var _ref12$allowTrailingD = _ref12.allowTrailingDot;
  let allowTrailingDot = _ref12$allowTrailingD === undefined ? false : _ref12$allowTrailingD;
  var _ref12$allowProtocolR = _ref12.allowProtocolRelativeUrls;
  let allowProtocolRelativeUrls = _ref12$allowProtocolR === undefined ? false : _ref12$allowProtocolR;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isURL)(v, {
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

function stringUUID(v) {
  var _ref13 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  let version = _ref13.version;

  if ((0, _typeable.isString)(v)) {
    return (0, _validator.isUUID)(v, version);
  } else {
    return false;
  }
};