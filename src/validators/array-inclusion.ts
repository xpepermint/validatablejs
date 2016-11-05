import {isArray} from 'typeable';

export function arrayInclusion (v: any, d: {values?: any[]} = {}): boolean {
  let {values} = d;

  if (!isArray(values)) return false;

  return values.findIndex((i) => i === v) !== -1;
}
