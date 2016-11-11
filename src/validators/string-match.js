import {isString} from 'typeable';

export function stringMatch (value, {regexp} = {}) {
  if (!isString(value)) return false;

  return regexp.test(value);
};
