import {arrayInclusion} from './array-inclusion';

export interface Options {
  values?: any[];
}

export function arrayExclusion (value: any, options: Options = {}): boolean {
  return !arrayInclusion(value, options);
}
