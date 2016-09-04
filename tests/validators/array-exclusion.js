const test = require('ava');
const validator = require('../../dist/validators/array-exclusion');

test('fails when included in the list', (t) => {
  t.is(validator(true, {values: [false]}), true);
});

test('passes when not included in the list', (t) => {
  t.is(validator(true, {values: [false, true]}), false);
});
