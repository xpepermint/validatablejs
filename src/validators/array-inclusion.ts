import { isArray } from 'typeable';

export interface ArrayInclusionOptions {
  values?: any[];
}

export function arrayInclusion (value: any, options: ArrayInclusionOptions = {}): boolean {
  let { values } = options;

  if (!isArray(values)) return false;

  return values.indexOf(value) !== -1;
}
