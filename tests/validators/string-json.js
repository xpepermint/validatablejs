const test = require('ava');
const validator = require('../../dist/validators/string-json');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('{key: "value"}'), false);
});

test('passes when valid', (t) => {
  t.is(validator('{"key": "value"}'), true);
});
