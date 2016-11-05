import {
  isString
} from 'typeable';

/**
* An interface defining a configuration object for `arrayInclusion` validator.
*/

export interface StringMatchValidation {
  regexp: RegExp;
}

/**
 * Validates that the specified field matches the pattern.
 */

export function stringMatch (v: any, d: StringMatchValidation): boolean {
  if (!isString(v)) {
    return false;
  }
  return d.regexp.test(v);
};
