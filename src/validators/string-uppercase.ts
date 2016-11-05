import {
  isString
} from 'typeable';

/**
 * Validates that the specified field is uppercase.
 */

export function stringUppercase (v: any): boolean {
  if (!isString(v)) {
    return false;
  }

  return v === v.toUpperCase();
};
