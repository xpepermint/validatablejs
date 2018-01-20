import { isString } from 'typeable';

export interface StringMatchOptions {
  regexp?: RegExp;
}

export function stringMatch (value: any, recipe: StringMatchOptions = {}): boolean {
  if (!isString(value)) return false;

  let { regexp } = recipe;
  return regexp.test(value);
};
