const test = require('ava');
const {arrayInclusion} = require('../../dist/validators');

test('fails when not included in the list', (t) => {
  t.is(arrayInclusion(true, {values: [false]}), false);
});

test('passes when included in the list', (t) => {
  t.is(arrayInclusion(true, {values: [false, true]}), true);
});
