import {isString} from 'typeable';

export function stringUppercase (value) {
  if (!isString(value)) return false;

  return value === value.toUpperCase();
};
