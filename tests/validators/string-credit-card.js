const test = require('ava');
const {stringCreditCard} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringCreditCard(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringCreditCard('1'), false);
});

test('passes when valid', (t) => {
  t.is(stringCreditCard('375556917985515'), true);
});
