import {stringInclusion} from './string-inclusion';

export function stringExclusion (value, recipe) {
  return !stringInclusion(value, recipe);
}
