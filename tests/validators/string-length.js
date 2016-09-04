const test = require('ava');
const {stringLength} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringLength(true), false);
});

test('fails when too short', (t) => {
  t.is(stringLength('hello', {min: 10}), false);
});

test('fails when too long', (t) => {
  t.is(stringLength('hello', {max: 2}), false);
});

test('passes without options', (t) => {
  t.is(stringLength('hello'), true);
});
