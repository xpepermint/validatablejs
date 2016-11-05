import {
  isString,
  toString
} from 'typeable';

export function stringInclusion (v: any, d: {seed?: any} = {}): boolean {
  if (!isString(v)) {
    return false;
  }

  return v.indexOf(toString(d.seed)) >= 0;
}
