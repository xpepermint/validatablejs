import { isString, toString } from 'typeable';

export interface StringInclusionOptions {
  seed?: string;
}

export function stringInclusion (value: any, options: StringInclusionOptions = {}): boolean {
  if (!isString(value)) return false;

  let {seed} = options;
  return value.indexOf(toString(seed)) >= 0;
}
