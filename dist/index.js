'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validator = undefined;
exports.defaultErrorBuilder = defaultErrorBuilder;

var _validators = require('./validators');

var defaultValidators = _interopRequireWildcard(_validators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function defaultErrorBuilder(name, value, definition) {
  let message = definition.message;

  let isString = typeof message === 'string';
  return isString ? message : message.call(this, value, definition);
}

class Validator {

  constructor() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$firstErrorOnly = _ref.firstErrorOnly;
    let firstErrorOnly = _ref$firstErrorOnly === undefined ? false : _ref$firstErrorOnly;
    var _ref$errorBuilder = _ref.errorBuilder;
    let errorBuilder = _ref$errorBuilder === undefined ? defaultErrorBuilder : _ref$errorBuilder;
    var _ref$validators = _ref.validators;
    let validators = _ref$validators === undefined ? {} : _ref$validators;
    var _ref$context = _ref.context;
    let context = _ref$context === undefined ? null : _ref$context;

    this.firstErrorOnly = firstErrorOnly;
    this.errorBuilder = errorBuilder;
    this.validators = Object.assign(validators, defaultValidators);
    this.context = context;
  }

  validate(value) {
    var _arguments = arguments,
        _this = this;

    return _asyncToGenerator(function* () {
      let definitions = _arguments.length <= 1 || _arguments[1] === undefined ? {} : _arguments[1];

      let errors = [];

      for (let name in definitions) {
        let definition = definitions[name];

        let validator = _this.validators[name];
        if (!validator) {
          throw new Error(`Unknown validator ${ name }`);
        }

        let isValid = yield validator.call(_this.context, value, definition);
        if (!isValid) {
          let error = yield _this.errorBuilder.call(_this.context, name, value, definition);
          errors.push(error);

          if (_this.firstErrorOnly) break;
        }
      }

      return errors;
    })();
  }
}
exports.Validator = Validator;