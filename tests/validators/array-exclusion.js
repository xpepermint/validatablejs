const test = require('ava');
const {arrayExclusion} = require('../../dist/validators');

test('fails when included in the list', (t) => {
  t.is(arrayExclusion(true, {values: [false]}), true);
});

test('passes when not included in the list', (t) => {
  t.is(arrayExclusion(true, {values: [false, true]}), false);
});
