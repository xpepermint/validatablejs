import { isString } from 'typeable';

export function stringLowercase (value: any): boolean {
  if (!isString(value)) return false;

  return value === value.toLowerCase();
};
