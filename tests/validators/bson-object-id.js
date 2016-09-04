const test = require('ava');
const validator = require('../../dist/validators/bson-object-id');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('507f1f77bcf86cd7994390'), false);
});

test('passes when valid', (t) => {
  t.is(validator('507f1f77bcf86cd799439011'), true);
});
