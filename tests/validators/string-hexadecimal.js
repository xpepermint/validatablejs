const test = require('ava');
const validator = require('../../dist/validators/string-hexadecimal');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('abcdefg'), false);
});

test('passes when valid', (t) => {
  t.is(validator('ff0044'), true);
});
