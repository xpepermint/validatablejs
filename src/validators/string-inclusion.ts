import {
  isString,
  toString
} from 'typeable';

export interface Options {
  seed?: string;
}

export function stringInclusion (value: any, options: Options = {}): boolean {
  if (!isString(value)) return false;

  let {seed} = options;
  return value.indexOf(toString(seed)) >= 0;
}
