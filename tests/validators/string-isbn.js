const test = require('ava');
const validator = require('../../dist/validators/string-isbn');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('3-423-21412-1'), false);
});

test('fails when invalid v10', (t) => {
  t.is(validator('3423214121', {version: 10}), false);
});

test('fails when invalid v13', (t) => {
  t.is(validator('9783836221190', {version: 13}), false);
});

test('passes when valid', (t) => {
  t.is(validator('3836221195'), true);
});

test('passes when valid v10', (t) => {
  t.is(validator('1-61729-085-8', {version: 10}), true);
});

test('passes when valid v13', (t) => {
  t.is(validator('978-3401013190', {version: 13}), true);
});
