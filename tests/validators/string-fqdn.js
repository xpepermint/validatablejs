import test from 'ava';
import { stringFQDN } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringFQDN(true), false);
});

test('fails without top-level domain name', (t) => {
  t.is(stringFQDN('domain'), false);
});

test('fails when including underscore', (t) => {
  t.is(stringFQDN('do_main.com'), false);
});

test('fails when including trailing dot', (t) => {
  t.is(stringFQDN('domain.com.'), false);
});

test('passes with top-level domain name', (t) => {
  t.is(stringFQDN('domain.com'), true);
});

test('passes when including underscore where allowUnderscores is true', (t) => {
  t.is(stringFQDN('do_main.com', { allowUnderscores: true }), true);
});

test('passes when including trailing dot where allowTrailingDot is true', (t) => {
  t.is(stringFQDN('domain.com.', { allowTrailingDot: true }), true);
});
