/**
* An interface defining a configuration object for `arrayInclusion` validator.
*/
export interface StringMatchValidation {
    regexp: RegExp;
}
/**
 * Validates that the specified field matches the pattern.
 */
export declare function stringMatch(v: any, d: StringMatchValidation): boolean;
