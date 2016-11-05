import {isString, isFunction} from 'typeable';
import * as builtInValidators from './validators';

/*
* An interface which defines validator definition.
*/

export interface Validation {
  name: string; // validator name
  message: any;
  [option: string]: any; // aditional properties
}

/*
* A validation error class.
*/

export class ValidationError extends Error {
  public validation: Validation;
  public value: any;
  public code: number;

  /*
  * Class constructor.
  */

  constructor (
    validation: Validation, 
    value: any,
    code: number = 422
  ) {
    super();

    this.name = this.constructor.name;
    this.value = value;
    this.code = code;

    this.validation = Object.assign({}, validation);
    if (isFunction(this.validation.message)) {
      this.validation.message = this.validation.message();
    }
    this.message = this.validation.message;
  }
}

/*
* A core validation class.
*/

export class Validator {
  public firstErrorOnly: boolean;
  public validationError: typeof ValidationError;
  public validators: {[validator: string]: (value: any, options: any) => boolean | Promise<boolean>};
  public context: any;

  /*
  * Class constructor.
  */

  constructor ({
    firstErrorOnly = false, 
    validationError = ValidationError, 
    validators = null, 
    context = null
  } = {}) {
    this.firstErrorOnly = firstErrorOnly;
    this.validationError = validationError;
    this.validators = Object.assign({}, builtInValidators, validators);
    this.context = context;
  }

  /*
  * Validates the `value` against the `validations`.
  */

  async validate (
    value: any, 
    validations: Validation[]
  ) {
    let errors = [];

    for (let validation of validations) {
      let {name} = validation;

      let validator = this.validators[name];
      if (!validator) {
        throw new Error(`Unknown validator ${name}`);
      }

      let isValid = await validator.call(this.context, value, validation);
      if (!isValid) {
        errors.push(
          new this.validationError(validation, value)
        );

        if (this.firstErrorOnly) break;
      }
    }

    return errors;
  }
}
