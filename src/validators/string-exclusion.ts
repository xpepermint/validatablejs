import { stringInclusion } from './string-inclusion';

export interface StringExclusionOptions {
  seed?: string;
}

export function stringExclusion (value: any, options: StringExclusionOptions = {}): boolean {
  return !stringInclusion(value, options);
}
