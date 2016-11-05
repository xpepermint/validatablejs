import {
  isString
} from 'typeable';

/**
* Validates that the specified field is a hexadecimal color string.
*/

export function stringHexColor (v: any) {
  if (!isString(v)) {
    return false;
  }

  return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(v);
};
