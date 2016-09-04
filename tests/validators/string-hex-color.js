const test = require('ava');
const {stringHexColor} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringHexColor(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringHexColor('#ff'), false);
});

test('passes when valid', (t) => {
  t.is(stringHexColor('#ff0034'), true);
});
