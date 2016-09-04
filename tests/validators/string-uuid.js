const test = require('ava');
const {stringUUID} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringUUID(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringUUID('xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3'), false);
});

test('fails when invalid v3', (t) => {
  t.is(stringUUID('987FBC97-4BED-5078-AF07-9141BA07C9F3', {version: 3}), false);
});

test('fails when invalid v4', (t) => {
  t.is(stringUUID('987FBC97-4BED-5078-AF07-9141BA07C9F3', {version: 4}), false);
});

test('fails when invalid v5', (t) => {
  t.is(stringUUID('713ae7e3-cb32-45f9-adcb-7c4fa86b90c1', {version: 5}), false);
});

test('passes when valid', (t) => {
  t.is(stringUUID('A987FBC9-4BED-3078-CF07-9141BA07C9F3'), true);
});

test('passes when valid v3', (t) => {
  t.is(stringUUID('A987FBC9-4BED-3078-CF07-9141BA07C9F3', {version: 3}), true);
});

test('passes when valid v4', (t) => {
  t.is(stringUUID('713ae7e3-cb32-45f9-adcb-7c4fa86b90c1', {version: 4}), true);
});

test('passes when valid v5', (t) => {
  t.is(stringUUID('987FBC97-4BED-5078-AF07-9141BA07C9F3', {version: 5}), true);
});
