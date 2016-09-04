const test = require('ava');
const validator = require('../../dist/validators/string-date');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('x'), false);
});

test('fails when invalid iso8601', (t) => {
  t.is(validator('12.12.2016', {format: 'iso8601'}), false);
});

test('passes when valid', (t) => {
  t.is(validator('2009'), true);
});

test('passes when valid iso8601', (t) => {
  t.is(validator('2009-12T12:34', {format: 'iso8601'}), true);
});
