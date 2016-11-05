import {arrayInclusion} from './array-inclusion';

export function arrayExclusion (v: any, d: {values?: any[]} = {}): boolean {
  return !arrayInclusion(v, d);
}
