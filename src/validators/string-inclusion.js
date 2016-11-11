import {
  isString,
  toString
} from 'typeable';

export function stringInclusion (value, {seed} = {}) {
  if (!isString(value)) return false;

  return value.indexOf(toString(seed)) >= 0;
}
