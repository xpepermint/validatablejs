import {
  isString
} from 'typeable';

/**
 * Validates that the specified field is lowercase.
 */

export function stringLowercase (v: any): boolean {
  if (!isString(v)) {
    return false;
  }

  return v === v.toLowerCase();
};
