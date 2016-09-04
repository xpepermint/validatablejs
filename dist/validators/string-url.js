'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isURL = _require2.isURL;


module.exports = function (str) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$protocols = _ref.protocols;
  let protocols = _ref$protocols === undefined ? ['http', 'https', 'ftp'] : _ref$protocols;
  var _ref$requireTld = _ref.requireTld;
  let requireTld = _ref$requireTld === undefined ? true : _ref$requireTld;
  var _ref$requireProtocol = _ref.requireProtocol;
  let requireProtocol = _ref$requireProtocol === undefined ? true : _ref$requireProtocol;
  var _ref$requireValidProt = _ref.requireValidProtocol;
  let requireValidProtocol = _ref$requireValidProt === undefined ? true : _ref$requireValidProt;
  var _ref$allowUnderscores = _ref.allowUnderscores;
  let allowUnderscores = _ref$allowUnderscores === undefined ? false : _ref$allowUnderscores;
  var _ref$allowTrailingDot = _ref.allowTrailingDot;
  let allowTrailingDot = _ref$allowTrailingDot === undefined ? false : _ref$allowTrailingDot;
  var _ref$allowProtocolRel = _ref.allowProtocolRelativeUrls;
  let allowProtocolRelativeUrls = _ref$allowProtocolRel === undefined ? false : _ref$allowProtocolRel;

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