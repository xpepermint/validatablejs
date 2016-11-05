import {
  isString,
  toString
} from 'typeable';

export function stringInclusion (value: any, {seed}: {seed?: any} = {}): boolean {
  if (!isString(value)) return false;

  return value.indexOf(toString(seed)) >= 0;
}
