import * as merge from 'lodash.merge';
import * as builtInValidators from './validators';

/*
* Recype type definition.
*/

export interface ValidatorRecipe {
  validator: string;
  message: string;
  condition?: () => boolean | Promise<boolean>;
  [key: string]: any;
}

/*
* A core validation class.
*/

export class Validator {
  firstErrorOnly: boolean;
  validators: any;
  context: any;

  /*
  * Class constructor.
  */

  constructor ({
    firstErrorOnly = false,
    validators = {},
    context = null
  }: {
    firstErrorOnly?: boolean,
    validators?: any,
    context?: any
  } = {}) {
    this.firstErrorOnly = firstErrorOnly;
    this.validators = merge(builtInValidators, validators);
    this.context = context;
  }

  /*
  * Returns a new instance of ValidatorError instance.
  */

  _createValidatorError (
    recipe: ValidatorRecipe
  ) {
    let {validator, code = 422} = recipe;

    let message = typeof recipe.message === 'function'
      ? recipe.message()
      : recipe.message;
    message = this._createString(message, recipe); // apply variables to a message

    return {validator, message, code};
  }

  /*
  * Replaces variables in a string (e.g. `%{variable}`) with object key values.
  */

  _createString (
    template,
    data
  ) {
    for (let key in data) {
      template = template.replace(`%{${key}}`, data[key]);
    }
    return template;
  }

  /*
  * Validates the `value` against the `validations`.
  */

  async validate (
    value: any,
    recipes: ValidatorRecipe[] = []
  ) {
    let errors = [];

    for (let recipe of recipes) {
      let condition = recipe.condition;
      if (condition) {
        let result = await condition.call(this.context, value, recipe);
        if (!result) continue;
      }

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
