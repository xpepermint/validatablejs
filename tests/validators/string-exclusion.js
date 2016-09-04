const test = require('ava');
const validator = require('../../dist/validators/string-exclusion');

test('fails when a string', (t) => {
  t.is(validator(true, {seed: 'true'}), true);
});

test('fails when containing the provided seed', (t) => {
  t.is(validator('my fake2 description', {seed: 'black'}), true);
});

test('passes when not containing the provided seed', (t) => {
  t.is(validator('my fake description', {seed: 'fake'}), false);
});
