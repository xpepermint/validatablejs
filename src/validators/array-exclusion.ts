import { arrayInclusion } from './array-inclusion';

export interface ArrayExclusionOptions {
  values?: any[];
}

export function arrayExclusion (value: any, options: ArrayExclusionOptions = {}): boolean {
  return !arrayInclusion(value, options);
}
