import {isArray} from 'typeable';

export interface Options {
  values?: any[];
}

export function arrayInclusion (value: any, options: Options = {}): boolean {
  let {values} = options;

  if (!isArray(values)) return false;

  return values.indexOf(value) !== -1;
}
