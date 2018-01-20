import test from 'ava';
import { stringLength } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringLength(true), false);
});

test('fails when too short', (t) => {
  t.is(stringLength('hello', { min: 10 }), false);
});

test('fails when too long', (t) => {
  t.is(stringLength('hello', { max: 2 }), false);
});

test('passes without options', (t) => {
  t.is(stringLength('hello'), true);
});

test('supports bytes length', (t) => {
  t.is(stringLength('ašč', { bytes: true, max: 3 }), false);
  t.is(stringLength('ašč', { bytes: true, max: 6 }), true);
  t.is(stringLength('ašč', { minOrEqual: 3 }), true);
  t.is(stringLength('ašč', { maxOrEqual: 3 }), true);
});
