const test = require('ava');
const {stringMACAddress} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringMACAddress(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringMACAddress('01:02:03:04:05'), false);
});

test('passes when valid', (t) => {
  t.is(stringMACAddress('ab:ab:ab:ab:ab:ab'), true);
});
