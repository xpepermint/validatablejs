const test = require('ava');
const validator = require('../../dist/validators/array-inclusion');

test('fails when not included in the list', (t) => {
  t.is(validator(true, {values: [false]}), false);
});

test('passes when included in the list', (t) => {
  t.is(validator(true, {values: [false, true]}), true);
});
