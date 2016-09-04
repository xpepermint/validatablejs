const test = require('ava');
const {stringUppercase} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringUppercase(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringUppercase('Hello'), false);
});

test('passes when valid', (t) => {
  t.is(stringUppercase('HELLO'), true);
});
