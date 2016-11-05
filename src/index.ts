import * as builtInValidators from './validators';

/*
* Definition of the validator block method.
*/

export type ValidatorBlock = (value: any, recipe: any) => boolean | Promise<boolean>;

/*
* Definition of the recipe object for a validator.
*/

export interface RecipeObject {
  name: string; // validator name
  message: string | (() => string);
  [key: string]: any; // aditional properties
}

/*
* A validation error class.
*/

export class ValidationError extends Error {
  public recipe: RecipeObject;
  public value: any;
  public code: number;

  /*
  * Class constructor.
  */

  public constructor (
    recipe: RecipeObject,
    value: any = null,
    code: number = 422
  ) {
    let message = typeof recipe.message === 'function'
      ? recipe.message()
      : recipe.message;

    super(message);

    this.name = this.constructor.name;
    this.recipe = Object.assign({}, recipe, {message});
    this.value = value;
    this.code = code;
  }
}

/*
* A core validation class.
*/

export class Validator {
  public firstErrorOnly: boolean;
  public validationError: typeof ValidationError;
  public validators: {[validator: string]: (value: any, validation: any) => boolean | Promise<boolean>};
  public context: any;

  /*
  * Class constructor.
  */

  public constructor ({
    firstErrorOnly = false,
    validationError = ValidationError,
    validators = {},
    context = null
  }: {
    firstErrorOnly?: boolean,
    validationError?: typeof ValidationError,
    validators?: {[name: string]: ValidatorBlock},
    context?: any
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
    recipes: RecipeObject[]
  ) {
    let errors = [];

    for (let recipe of recipes) {
      let {name} = recipe;

      let validator = this.validators[name];
      if (!validator) {
        throw new Error(`Unknown validator ${name}`);
      }

      let isValid = await validator.call(this.context, value, recipe);
      if (!isValid) {
        errors.push(
          new this.validationError(recipe, value)
        );

        if (this.firstErrorOnly) break;
      }
    }

    return errors;
  }
}
