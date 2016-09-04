'use strict';

var _require = require('typeable');

const isString = _require.isString;

var _require2 = require('validator');

const isEmail = _require2.isEmail;


module.exports = function (str) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$allowDisplayName = _ref.allowDisplayName;
  let allowDisplayName = _ref$allowDisplayName === undefined ? false : _ref$allowDisplayName;
  var _ref$allowUtf8LocalPa = _ref.allowUtf8LocalPart;
  let allowUtf8LocalPart = _ref$allowUtf8LocalPa === undefined ? false : _ref$allowUtf8LocalPa;
  var _ref$requireTld = _ref.requireTld;
  let requireTld = _ref$requireTld === undefined ? true : _ref$requireTld;

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