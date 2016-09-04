const test = require('ava');
const validator = require('../../dist/validators/string-match');

test('passes with a valid pattern', (t) => {
  t.is(validator('me', 'me', 'i'), true);
});
