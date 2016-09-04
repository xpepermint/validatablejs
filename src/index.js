const {isFunction} = require('typeable');

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
  stringUUID: require('./validators/string-uuid'),
};

exports.validate = async function(value, config, {onlyFirstError, errorFormat}={}, context=null) {
  if (onlyFirstError !== true) {
    onlyFirstError = false;
  }
  if (!isFunction(errorFormat)) {
    errorFormat = (value, definition) => definition.message;
  }

  let errors = [];

  for (let name in config) {
    let definition = config[name];

    let validator = exports.validators[name];
    if (!validator) {
      throw new Error(`Unknown validator ${name}`);
    }

    let isValid = await validator.call(context, value, definition);
    if (!isValid) {
      errors.push(errorFormat.call(context, value, definition));

      if (onlyFirstError) break;
    }
  }

  return errors;
};
