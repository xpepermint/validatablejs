const test = require('ava');
const validator = require('../../dist/validators/string-fqdn');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails without top-level domain name', (t) => {
  t.is(validator('domain'), false);
});

test('fails when including underscore', (t) => {
  t.is(validator('do_main.com'), false);
});

test('fails when including trailing dot', (t) => {
  t.is(validator('domain.com.'), false);
});

test('passes with top-level domain name', (t) => {
  t.is(validator('domain.com'), true);
});

test('passes when including underscore where allowUnderscores is true', (t) => {
  t.is(validator('do_main.com', {allowUnderscores: true}), true);
});

test('passes when including trailing dot where allowTrailingDot is true', (t) => {
  t.is(validator('domain.com.', {allowTrailingDot: true}), true);
});
