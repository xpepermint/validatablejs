const test = require('ava');
const validator = require('../../dist/validators/string-mac-address');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('01:02:03:04:05'), false);
});

test('passes when valid', (t) => {
  t.is(validator('ab:ab:ab:ab:ab:ab'), true);
});
