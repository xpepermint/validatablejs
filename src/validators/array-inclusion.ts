import {isArray} from 'typeable';

export function arrayInclusion (value: any, recipe: any = {}): boolean {
  let {values} = recipe;

  if (!isArray(values)) return false;

  return values.findIndex((i) => i === value) !== -1;
}
