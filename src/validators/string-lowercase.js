import {isString} from 'typeable';

export function stringLowercase (value) {
  if (!isString(value)) return false;

  return value === value.toLowerCase();
};
