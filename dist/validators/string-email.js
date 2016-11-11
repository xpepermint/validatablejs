'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringEmail = stringEmail;

var _typeable = require('typeable');

var _stringFqdn = require('./string-fqdn');

var _stringLength = require('./string-length');

var DISPLAY_NAME_REGEX = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var EMAIL_USER_REGEX = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var QUOTED_EMAIL_USER_REGEX = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var EMAIL_USER_UTF8_REGEX = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var QUOTED_EMAIL_USER_UTF8_REGEX = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;

function stringEmail(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$allowDisplayName = _ref.allowDisplayName,
      allowDisplayName = _ref$allowDisplayName === undefined ? false : _ref$allowDisplayName,
      _ref$allowUtf8LocalPa = _ref.allowUtf8LocalPart,
      allowUtf8LocalPart = _ref$allowUtf8LocalPa === undefined ? false : _ref$allowUtf8LocalPa,
      _ref$requireTld = _ref.requireTld,
      requireTld = _ref$requireTld === undefined ? true : _ref$requireTld;

  if (!(0, _typeable.isString)(value)) return false;

  if (allowDisplayName) {
    var displayEmail = value.match(DISPLAY_NAME_REGEX);
    if (displayEmail) {
      value = displayEmail[1];
    }
  }

  var parts = value.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lowerDomain = domain.toLowerCase();
  if (lowerDomain === 'gmail.com' || lowerDomain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _stringLength.stringLength)(user, { bytes: true, max: 64 }) || !(0, _stringLength.stringLength)(domain, { bytes: true, max: 256 })) {
    return false;
  } else if (!(0, _stringFqdn.stringFQDN)(domain, { requireTld: requireTld })) {
    return false;
  } else if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return allowUtf8LocalPart ? QUOTED_EMAIL_USER_UTF8_REGEX.test(user) : QUOTED_EMAIL_USER_REGEX.test(user);
  }

  var pattern = allowUtf8LocalPart ? EMAIL_USER_UTF8_REGEX : EMAIL_USER_REGEX;
  var userParts = user.split('.');
  for (var i = 0; i < userParts.length; i++) {
    if (!pattern.test(userParts[i])) {
      return false;
    }
  }

  return true;
}