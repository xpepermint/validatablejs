const test = require('ava');
const validator = require('../../dist/validators/presence');

test('fails when null', (t) => {
  t.is(validator(null), false);
});

test('fails when undefined', (t) => {
  t.is(validator(), false);
});

test('fails when blank', (t) => {
  t.is(validator(''), false);
});

test('passes when present', (t) => {
  t.is(validator('john'), true);
});
