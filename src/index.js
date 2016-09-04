import {isFunction} from 'typeable';
import * as defaultValidators from './validators';

export class Validator {

  constructor({
    firstErrorOnly=false,
    errorBuilder=(value, {message}) => message,
    validators={},
    context=null
  }={}) {
    this.firstErrorOnly = firstErrorOnly;
    this.errorBuilder = errorBuilder;
    this.validators = Object.assign(validators, defaultValidators);
    this.context = context;
  }

  async validate(value, definitions={}) {
    let errors = [];

    for (let name in definitions) {
      let definition = definitions[name];

      let validator = this.validators[name];
      if (!validator) {
        throw new Error(`Unknown validator ${name}`);
      }

      let isValid = await validator.call(this.context, value, definition);
      if (!isValid) {
        let error = await this.errorBuilder.call(this.context, value, definition);
        errors.push(error);

        if (this.firstErrorOnly) break;
      }
    }

    return errors;
  }
}
