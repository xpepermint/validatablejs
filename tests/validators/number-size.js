import test from 'ava';
import { numberSize } from '../../dist/validators';

test('fails when not a number', (t) => {
  t.is(numberSize(true), false);
});

test('fails when too small', (t) => {
  t.is(numberSize(100, { min: 200 }), false);
});

test('fails when too large', (t) => {
  t.is(numberSize(100, { max: 20 }), false);
});

test('passes without options', (t) => {
  t.is(numberSize(100), true);
});

test('passes when valid', (t) => {
  t.is(numberSize(100, { min: 10, max: 1000 }), true);
  t.is(numberSize(100, { minOrEqual: 100 }), true);
  t.is(numberSize(100, { maxOrEqual: 100 }), true);
});
