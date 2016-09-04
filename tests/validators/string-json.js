const test = require('ava');
const {stringJSON} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringJSON(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringJSON('{key: "value"}'), false);
});

test('passes when valid', (t) => {
  t.is(stringJSON('{"key": "value"}'), true);
});
