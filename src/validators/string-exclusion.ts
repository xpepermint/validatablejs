import {stringInclusion} from './string-inclusion';

export function stringExclusion (value: any, recipe: any): boolean {
  return !stringInclusion(value, recipe);
}
