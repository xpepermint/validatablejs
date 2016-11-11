import * as builtInValidators from './validators';

/*
* A core validation class.
*/

export class Validator {

  /*
  * Class constructor.
  */

  constructor ({firstErrorOnly = false, validators = {}, context = null} = {}) {
    this.firstErrorOnly = firstErrorOnly;
    this.validators = Object.assign({}, builtInValidators, validators);
    this.context = context;
  }

  /*
  * Returns a new instance of ValidatorError instance.
  */

  _createValidatorError (recipe) {
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

  _createString (template, data) {
    for (let key in data) {
      template = template.replace(`%{${key}}`, data[key]);
    }
    return template;
  }

  /*
  * Validates the `value` against the `validations`.
  */

  async validate (value, recipes = []) {
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
