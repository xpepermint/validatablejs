"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const builtInValidators = require('./validators');
/*
* A validation error class.
*/
class ValidatorError extends Error {
    /*
    * Class constructor.
    */
    constructor(validator = null, message = null, code = 422) {
        super(message);
        this.name = this.constructor.name; // class name
        this.validator = validator; // validator name
        this.message = message; // validation error message
        this.code = code; // error code
    }
}
exports.ValidatorError = ValidatorError;
/*
* A core validation class.
*/
class Validator {
    /*
    * Class constructor.
    */
    constructor({ firstErrorOnly = false, validators = {}, context = null } = {}) {
        this.firstErrorOnly = firstErrorOnly;
        this.validators = Object.assign({}, builtInValidators, validators);
        this.context = context;
    }
    /*
    * Returns a new instance of ValidatorError instance.
    */
    _createValidatorError(recipe) {
        let message = typeof recipe.message === 'function'
            ? recipe.message()
            : recipe.message;
        message = this._createString(message, recipe); // apply variables to a message
        return new ValidatorError(recipe.validator, message);
    }
    /*
    * Replaces variables in a string (e.g. `%{variable}`) with object key values.
    */
    _createString(template, data) {
        for (let key in data) {
            template = template.replace(`%{${key}}`, data[key]);
        }
        return template;
    }
    /*
    * Validates the `value` against the `validations`.
    */
    validate(value, recipes = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = [];
            for (let recipe of recipes) {
                let name = recipe.validator;
                let validator = this.validators[name];
                if (!validator) {
                    throw new Error(`Unknown validator ${name}`);
                }
                let isValid = yield validator.call(this.context, value, recipe);
                if (!isValid) {
                    errors.push(this._createValidatorError(recipe));
                    if (this.firstErrorOnly)
                        break;
                }
            }
            return errors;
        });
    }
}
exports.Validator = Validator;
