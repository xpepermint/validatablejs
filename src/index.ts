import merge = require('lodash.merge');
import {isArray} from 'typeable';
import * as builtInValidators from './validators';

/*
* Recipe type definition.
*/

export interface ValidatorRecipe {
  validator: string;
  message?: string | (() => string);
  code?: number;
  condition?: () => boolean | Promise<boolean>;
  [key: string]: any;
}

/*
* Error type definition.
*/

export interface ValidatorError {
  validator: string;
  message: string;
  code: number;
}

/*
* A core validation class.
*/

export class Validator {
  failFast: boolean;
  validators: {[name: string]: () => boolean | Promise<boolean>};
  context: any;

  /*
  * Class constructor.
  */

  constructor ({
    failFast = false,
    validators = {},
    context = null
  }: {
    failFast?: boolean,
    validators?: {[name: string]: () => boolean | Promise<boolean>},
    context?: any
  } = {}) {
    this.failFast = failFast;
    this.validators = merge(builtInValidators, validators);
    this.context = context;
  }

  /*
  * Returns a new instance of ValidatorError instance.
  */

  _createValidatorError (recipe: ValidatorRecipe): ValidatorError {
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

  _createString (template: string, data: any): string {
    if (!template) {
      return template;
    }

    for (let key in data) {
      template = template.replace(`%{${key}}`, data[key]);
    }

    return template;
  }

  /*
  * Validates the `value` against the `validations`.
  */

  async validate (value: any, recipes: ValidatorRecipe[] = []): Promise<ValidatorError[]> {
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

      let isValid = await Promise.all(
        (isArray(value) ? value : [value])
          .map((v) => validator.call(this.context, v, recipe))
      ).then((r) => r.indexOf(false) === -1);

      if (!isValid) {
        errors.push(
          this._createValidatorError(recipe)
        );

        if (this.failFast) break;
      }
    }

    return errors;
  }
}
