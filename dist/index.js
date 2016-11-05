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
class ValidationError extends Error {
    /*
    * Class constructor.
    */
    constructor(recipe, value = null, code = 422) {
        let message = typeof recipe.message === 'function'
            ? recipe.message()
            : recipe.message;
        super(message);
        this.name = this.constructor.name;
        this.recipe = Object.assign({}, recipe, { message });
        this.value = value;
        this.code = code;
    }
}
exports.ValidationError = ValidationError;
/*
* A core validation class.
*/
class Validator {
    /*
    * Class constructor.
    */
    constructor({ firstErrorOnly = false, validationError = ValidationError, validators = {}, context = null } = {}) {
        this.firstErrorOnly = firstErrorOnly;
        this.validationError = validationError;
        this.validators = Object.assign({}, builtInValidators, validators);
        this.context = context;
    }
    /*
    * Validates the `value` against the `validations`.
    */
    validate(value, recipes = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = [];
            for (let recipe of recipes) {
                let { name } = recipe;
                let validator = this.validators[name];
                if (!validator) {
                    throw new Error(`Unknown validator ${name}`);
                }
                let isValid = yield validator.call(this.context, value, recipe);
                if (!isValid) {
                    errors.push(new this.validationError(recipe, value));
                    if (this.firstErrorOnly)
                        break;
                }
            }
            return errors;
        });
    }
}
exports.Validator = Validator;
