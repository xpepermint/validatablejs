const test = require('ava');
const validator = require('../../dist/validators/string-ip');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('abc'), false);
});

test('fails when invalid v4 IP', (t) => {
  t.is(validator('fe80::a6db:30ff:fe98:e946', {version: 4}), false);
});

test('fails when invalid v6 IP', (t) => {
  t.is(validator('127.0.0.1', {version: 6}), false);
});

test('passes when valid', (t) => {
  t.is(validator('127.0.0.1'), true);
});

test('passes when valid v4 IP', (t) => {
  t.is(validator('127.0.0.1', {version: 4}), true);
});

test('passes when valid v6 IP', (t) => {
  t.is(validator('fe80::a6db:30ff:fe98:e946', {version: 6}), true);
});
