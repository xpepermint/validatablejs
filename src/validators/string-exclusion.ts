import {
  stringInclusion
} from './string-inclusion';

export function stringExclusion (v: any, d: {seed?: any} = {}): boolean {
  return !stringInclusion(v, d);
}
