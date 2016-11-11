import {isString} from 'typeable';

export function stringHexColor (value) {
  if (!isString(value)) return false;

  return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(value);
}
