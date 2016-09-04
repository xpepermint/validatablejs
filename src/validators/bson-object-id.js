const {isString} = require('typeable');
const {ObjectID} = require('mongodb');

module.exports = function(id) {
  return ObjectID.isValid(id);
};
