const test = require('ava');
const validator = require('../../dist/validators/absence');

test('fails when not blank', (t) => {
  t.is(validator('text'), false);
});

test('passes when null', (t) => {
  t.is(validator(null), true);
});

test('passes when undefined', (t) => {
  t.is(validator(), true);
});

test('passes when blank', (t) => {
  t.is(validator(''), true);
});
