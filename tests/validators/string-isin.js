const test = require('ava');
const {stringISIN} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringISIN(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringISIN('DE000BAY0018'), false);
});

test('passes when valid', (t) => {
  t.is(stringISIN('AU0000XVGZA3'), true);
});
