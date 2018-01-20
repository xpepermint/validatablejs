import test from 'ava';
import { absence } from '../../dist/validators';

test('fails when not blank', (t) => {
  t.is(absence('text'), false);
});

test('passes when null', (t) => {
  t.is(absence(null), true);
});

test('passes when undefined', (t) => {
  t.is(absence(), true);
});

test('passes when blank', (t) => {
  t.is(absence(''), true);
});
