import test from 'ava';
import { arrayLength } from '../../dist/validators';

test('fails when not an array', (t) => {
  t.is(arrayLength(true), false);
});

test('fails when too small', (t) => {
  t.is(arrayLength([1, 2], { min: 3 }), false);
});

test('fails when too large', (t) => {
  t.is(arrayLength([1, 2, 3], { max: 2 }), false);
});

test('passes without options', (t) => {
  t.is(arrayLength([1, 2, 3]), true);
});

test('passes when valid', (t) => {
  t.is(arrayLength([1, 2, 3], { min: 2, max: 4 }), true);
  t.is(arrayLength([1, 2], { minOrEqual: 2 }), true);
  t.is(arrayLength([1, 2], { maxOrEqual: 2 }), true);
});
