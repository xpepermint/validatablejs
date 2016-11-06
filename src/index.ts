import * as builtInValidators from './validators';

/*
* Definition of the validator block method.
*/

export type ValidatorBlock = (value: any, recipe: any) => boolean | Promise<boolean>;

/*
* Definition of the recipe object for a validator.
*/

export interface RecipeObject {
  validator: string; // validator name
  message: string | (() => string);
  [key: string]: any; // aditional properties
}

/*
* A validation error class.
*/

export class ValidatorError extends Error {
  public validator: string;
  public message: string;
  public code: number;

  /*
  * Class constructor.
  */

  public constructor (
    validator: string,
    message: string = null,
    code: number = 422
  ) {
    super(message);

    this.name = this.constructor.name; // class name
    this.validator = validator; // validator name
    this.message = message; // validation error message
    this.code = code; // error code
  }
}

/*
* A core validation class.
*/

export class Validator {
  public firstErrorOnly: boolean;
  public validators: {[validator: string]: (value: any, validation: any) => boolean | Promise<boolean>};
  public context: any;

  /*
  * Class constructor.
  */

  public constructor ({
    firstErrorOnly = false,
    validators = {},
    context = null
  }: {
    firstErrorOnly?: boolean,
    validators?: {[name: string]: ValidatorBlock},
    context?: any
  } = {}) {
    this.firstErrorOnly = firstErrorOnly;
    this.validators = Object.assign({}, builtInValidators, validators);
    this.context = context;
  }

  /*
  * Returns a new instance of ValidatorError instance.
  */

  protected _createValidatorError (recipe: RecipeObject): ValidatorError {
    let message = typeof recipe.message === 'function'
      ? recipe.message()
      : recipe.message;

    message = this._createString(message, recipe); // apply variables to a message

    return new ValidatorError(recipe.validator, message);
  }

  /*
  * Replaces variables in a string (e.g. `%{variable}`) with object key values.
  */

  protected _createString (template, data): string {
    for (let key in data) {
      template = template.replace(`%{${key}}`, data[key]);
    }
    return template;
  }

  /*
  * Validates the `value` against the `validations`.
  */

  public async validate (
    value: any,
    recipes: RecipeObject[] = []
  ) {
    let errors = [];

    for (let recipe of recipes) {
      let name = recipe.validator;

      let validator = this.validators[name];
      if (!validator) {
        throw new Error(`Unknown validator ${name}`);
      }

      let isValid = await validator.call(this.context, value, recipe);
      if (!isValid) {
        errors.push(
          this._createValidatorError(recipe)
        );

        if (this.firstErrorOnly) break;
      }
    }

    return errors;
  }
}
