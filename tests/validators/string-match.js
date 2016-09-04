const test = require('ava');
const {stringMatch} = require('../../dist/validators');

test('passes with a valid pattern', (t) => {
  t.is(stringMatch('me', 'me', 'i'), true);
});
