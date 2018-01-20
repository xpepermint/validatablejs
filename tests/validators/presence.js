import test from 'ava';
import { presence } from '../../dist/validators';

test('fails when null', (t) => {
  t.is(presence(null), false);
});

test('fails when undefined', (t) => {
  t.is(presence(), false);
});

test('fails when blank', (t) => {
  t.is(presence(''), false);
});

test('passes when present', (t) => {
  t.is(presence('john'), true);
});
