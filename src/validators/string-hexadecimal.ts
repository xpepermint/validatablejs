import {
  isString
} from 'typeable';

export function stringHexadecimal (v) {
  if (isString(v)) {
    return /^[0-9A-F]+$/i.test(v);
  }
  else {
    return false;
  }
}
