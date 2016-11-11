import {arrayInclusion} from './array-inclusion';

export function arrayExclusion (value, recipe) {
  return !arrayInclusion(value, recipe);
}
