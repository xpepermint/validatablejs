const test = require('ava');
const validator = require('../../dist/validators/string-inclusion');

test('fails when not a string', (t) => {
  t.is(validator(true, {seed: 'true'}), false);
});

test('fails when not containing the provided seed', (t) => {
  t.is(validator('my fake2 description', {seed: 'black'}), false);
});

test('passes when containing the provided seed', (t) => {
  t.is(validator('my fake description', {seed: 'fake'}), true);
});
