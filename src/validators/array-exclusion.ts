import {arrayInclusion} from './array-inclusion';

export function arrayExclusion (value: any, recipe: any): boolean {
  return !arrayInclusion(value, recipe);
}
