const test = require('ava');
const {stringIP} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringIP(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringIP('abc'), false);
});

test('fails when invalid v4 IP', (t) => {
  t.is(stringIP('fe80::a6db:30ff:fe98:e946', {version: 4}), false);
});

test('fails when invalid v6 IP', (t) => {
  t.is(stringIP('127.0.0.1', {version: 6}), false);
});

test('passes when valid', (t) => {
  t.is(stringIP('127.0.0.1'), true);
});

test('passes when valid v4 IP', (t) => {
  t.is(stringIP('127.0.0.1', {version: 4}), true);
});

test('passes when valid v6 IP', (t) => {
  t.is(stringIP('fe80::a6db:30ff:fe98:e946', {version: 6}), true);
});
