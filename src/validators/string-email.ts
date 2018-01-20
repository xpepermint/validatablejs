import { isString } from 'typeable';
import { stringFQDN } from './string-fqdn';
import { stringLength } from './string-length';

const DISPLAY_NAME_REGEX = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
const EMAIL_USER_REGEX = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
const QUOTED_EMAIL_USER_REGEX = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
const EMAIL_USER_UTF8_REGEX = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
const QUOTED_EMAIL_USER_UTF8_REGEX = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;

export interface StringEmailOptions {
  allowDisplayName?: boolean;
  allowUtf8LocalPart?: boolean;
  requireTld?: boolean;
}

export function stringEmail (value: any, recipe: StringEmailOptions = {}): boolean {
  if (!isString(value)) return false;

  let { allowDisplayName = false, allowUtf8LocalPart = false, requireTld = true } = recipe;
  if (allowDisplayName) {
    let displayEmail = value.match(DISPLAY_NAME_REGEX);
    if (displayEmail) {
      value = displayEmail[1];
    }
  }

  let parts = value.split('@');
  let domain = parts.pop();
  let user = parts.join('@');
  let lowerDomain = domain.toLowerCase();
  if (lowerDomain === 'gmail.com' || lowerDomain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!stringLength(user, {bytes: true, max: 64}) || !stringLength(domain, {bytes: true, max: 256})) {
    return false;
  }
  else if (!stringFQDN(domain, {requireTld: requireTld })) {
    return false;
  }
  else if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return allowUtf8LocalPart
      ? QUOTED_EMAIL_USER_UTF8_REGEX.test(user)
      : QUOTED_EMAIL_USER_REGEX.test(user);
  }

  let pattern = allowUtf8LocalPart
    ? EMAIL_USER_UTF8_REGEX
    : EMAIL_USER_REGEX;
  let userParts = user.split('.');
  for (let i = 0; i < userParts.length; i++) {
    if (!pattern.test(userParts[i])) {
      return false;
    }
  }

  return true;
}
