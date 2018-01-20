import test from 'ava';
import { stringHexadecimal } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringHexadecimal(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringHexadecimal('abcdefg'), false);
});

test('passes when valid', (t) => {
  t.is(stringHexadecimal('ff0044'), true);
});
