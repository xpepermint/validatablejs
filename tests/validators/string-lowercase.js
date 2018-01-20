import test from 'ava';
import { stringLowercase } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringLowercase(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringLowercase('Hello'), false);
});

test('passes when valid', (t) => {
  t.is(stringLowercase('hello'), true);
});
