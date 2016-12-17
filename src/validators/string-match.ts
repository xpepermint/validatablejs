import {isString} from 'typeable';

export interface Options {
  regexp?: RegExp;
}

export function stringMatch (value: any, recipe: Options = {}): boolean {
  if (!isString(value)) return false;

  let {regexp} = recipe;
  return regexp.test(value);
};
