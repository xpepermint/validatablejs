import {
  isString,
  isNumber
} from 'typeable';

export function stringLength (value, {bytes = false, min, minOrEqual, max, maxOrEqual} = {}) {
  if (!isString(value)) return false;

  let len = bytes
    ? encodeURI(value).split(/%..|./).length - 1
    : value.length;

  if (isNumber(min) && !(len > min)) return false;
  if (isNumber(minOrEqual) && !(len >= minOrEqual)) return false;
  if (isNumber(max) && !(len < max)) return false;
  if (isNumber(maxOrEqual) && !(len <= maxOrEqual)) return false;
  return true;
}
