const test = require('ava');
const {stringBase64} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringBase64(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringBase64('1'), false);
});

test('passes when valid', (t) => {
  t.is(stringBase64('dGVzdA=='), true);
});
