const test = require('ava');
const validator = require('../../dist/validators/string-uppercase');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('Hello'), false);
});

test('passes when valid', (t) => {
  t.is(validator('HELLO'), true);
});
