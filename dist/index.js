'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _require = require('typeable');

const isFunction = _require.isFunction;


exports.validators = {
  absence: require('./validators/absence'),
  arrayExclusion: require('./validators/array-exclusion'),
  arrayInclusion: require('./validators/array-inclusion'),
  blockValue: require('./validators/block-value'),
  BSONObjectId: require('./validators/bson-object-id'),
  presence: require('./validators/presence'),
  stringBase64: require('./validators/string-base64'),
  stringCreditCard: require('./validators/string-credit-card'),
  stringDate: require('./validators/string-date'),
  stringEmail: require('./validators/string-email'),
  stringExclusion: require('./validators/string-exclusion'),
  stringFQDN: require('./validators/string-fqdn'),
  stringhexColor: require('./validators/string-hex-color'),
  stringHexadecimal: require('./validators/string-hexadecimal'),
  stringInclusion: require('./validators/string-inclusion'),
  stringIP: require('./validators/string-ip'),
  stringISBN: require('./validators/string-isbn'),
  stringISIN: require('./validators/string-isin'),
  stringJSON: require('./validators/string-json'),
  stringLength: require('./validators/string-length'),
  stringLowercase: require('./validators/string-lowercase'),
  stringMACAddress: require('./validators/string-mac-address'),
  stringMatch: require('./validators/string-match'),
  stringUppercase: require('./validators/string-uppercase'),
  stringURL: require('./validators/string-url'),
  stringUUID: require('./validators/string-uuid')
};

exports.validate = (() => {
  var _ref = _asyncToGenerator(function* (value, config) {
    var _ref2 = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    let onlyFirstError = _ref2.onlyFirstError;
    let errorFormat = _ref2.errorFormat;
    let context = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

    if (onlyFirstError !== true) {
      onlyFirstError = false;
    }
    if (!isFunction(errorFormat)) {
      errorFormat = function (value, definition) {
        return definition.message;
      };
    }

    let errors = [];

    for (let name in config) {
      let definition = config[name];

      let validator = exports.validators[name];
      if (!validator) {
        throw new Error(`Unknown validator ${ name }`);
      }

      let isValid = yield validator.call(context, value, definition);
      if (!isValid) {
        errors.push(errorFormat.call(context, value, definition));

        if (onlyFirstError) break;
      }
    }

    return errors;
  });

  return function (_x3, _x4) {
    return _ref.apply(this, arguments);
  };
})();