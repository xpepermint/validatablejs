const test = require('ava');
const {stringDate} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringDate(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringDate('x'), false);
});

test('fails when invalid iso8601', (t) => {
  t.is(stringDate('12.12.2016', {format: 'iso8601'}), false);
});

test('passes when valid', (t) => {
  t.is(stringDate('2009'), true);
});

test('passes when valid iso8601', (t) => {
  t.is(stringDate('2009-12T12:34', {format: 'iso8601'}), true);
});
