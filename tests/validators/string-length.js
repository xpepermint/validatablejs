const test = require('ava');
const validator = require('../../dist/validators/string-length');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when too short', (t) => {
  t.is(validator('hello', {min: 10}), false);
});

test('fails when too long', (t) => {
  t.is(validator('hello', {max: 2}), false);
});

test('passes without options', (t) => {
  t.is(validator('hello'), true);
});
