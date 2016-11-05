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
  public value: any;
  public recipe: RecipeObject;
  public code: number;

  /*
  * Class constructor.
  */

  public constructor (
    value: any = null,
    recipe: RecipeObject = null,
    code: number = 422
  ) {
    super();

    this.message = typeof recipe.message === 'function'
      ? recipe.message()
      : recipe.message;

    this.name = this.constructor.name;
    this.value = value;
    this.recipe = Object.assign({}, recipe, {message: this.message});
    this.code = code;
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
  * Returns a new instance of validation error.
  */

  public createValidationError (value: any, recipe: RecipeObject): ValidationError {
    return new ValidationError(value, recipe);
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
      let {name} = recipe;

      let validator = this.validators[name];
      if (!validator) {
        throw new Error(`Unknown validator ${name}`);
      }

      let isValid = await validator.call(this.context, value, recipe);
      if (!isValid) {
        errors.push(
          this.createValidationError(value, recipe)
        );

        if (this.firstErrorOnly) break;
      }
    }

    return errors;
  }
}
