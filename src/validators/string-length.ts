import {
  isString,
  isNumber
} from 'typeable';

export function stringLength (v: any, {
  bytes = false,
  min, 
  minOrEqual, 
  max, 
  maxOrEqual
}: {
  bytes?: boolean,
  min?: number, 
  minOrEqual?: number, 
  max?: number, 
  maxOrEqual?: number
} = {}) {
  if (!isString(v)) {
    return false;
  }

  let len = bytes
    ? encodeURI(v).split(/%..|./).length - 1
    : v.length;

  if (isNumber(min) && !(len > min)) return false;
  if (isNumber(minOrEqual) && !(len >= minOrEqual)) return false;
  if (isNumber(max) && !(len < max)) return false;
  if (isNumber(maxOrEqual) && !(len <= maxOrEqual)) return false;
  return true;
}
