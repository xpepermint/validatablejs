import {isString} from 'typeable';

export function stringHexadecimal (value) {
  if (!isString(value)) return false;
  
  return /^[0-9A-F]+$/i.test(value);
}
