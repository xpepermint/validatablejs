const test = require('ava');
const validator = require('../../dist/validators/string-isin');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('DE000BAY0018'), false);
});

test('passes when valid', (t) => {
  t.is(validator('AU0000XVGZA3'), true);
});
