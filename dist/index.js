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
    constructor(validation, value, code = 422) {
        let message = typeof validation.message === 'function'
            ? validation.message()
            : validation.message;
        super(message);
        this.name = this.constructor.name;
        this.validation = Object.assign({}, validation, { message });
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
    constructor({ firstErrorOnly = false, validationError = ValidationError, validators = null, context = null } = {}) {
        this.firstErrorOnly = firstErrorOnly;
        this.validationError = validationError;
        this.validators = Object.assign({}, builtInValidators, validators);
        this.context = context;
    }
    /*
    * Validates the `value` against the `validations`.
    */
    validate(value, validations) {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = [];
            for (let validation of validations) {
                let { name } = validation;
                let validator = this.validators[name];
                if (!validator) {
                    throw new Error(`Unknown validator ${name}`);
                }
                let isValid = yield validator.call(this.context, value, validation);
                if (!isValid) {
                    errors.push(new this.validationError(validation, value));
                    if (this.firstErrorOnly)
                        break;
                }
            }
            return errors;
        });
    }
}
exports.Validator = Validator;
