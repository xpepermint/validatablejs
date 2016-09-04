const test = require('ava');
const validator = require('../../dist/validators/string-base64');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('1'), false);
});

test('passes when valid', (t) => {
  t.is(validator('dGVzdA=='), true);
});
