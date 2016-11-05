import {isString} from 'typeable';

export function stringMatch (value: any, {regexp}: {regexp?: RegExp} = {}): boolean {
  if (!isString(value)) return false;

  return regexp.test(value);
};
