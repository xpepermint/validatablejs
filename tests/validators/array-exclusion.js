import test from 'ava';
import { arrayExclusion } from '../../dist/validators';

test('fails when included in the list', (t) => {
  t.is(arrayExclusion(true, { values: [false] }), true);
});

test('passes when not included in the list', (t) => {
  t.is(arrayExclusion(true, { values: [false, true] }), false);
});
