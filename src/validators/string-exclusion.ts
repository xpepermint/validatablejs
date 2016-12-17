import {stringInclusion} from './string-inclusion';

export interface Options {
  seed?: string;
}

export function stringExclusion (value: any, options: Options = {}): boolean {
  return !stringInclusion(value, options);
}
