import { isString } from 'typeable';

export function stringUppercase (value: any): boolean {
  if (!isString(value)) return false;

  return value === value.toUpperCase();
};
