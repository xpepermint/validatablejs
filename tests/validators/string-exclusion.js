import test from 'ava';
import { stringExclusion } from '../../dist/validators';

test('fails when a string', (t) => {
  t.is(stringExclusion(true, { seed: 'true' }), true);
});

test('fails when containing the provided seed', (t) => {
  t.is(stringExclusion('my fake2 description', { seed: 'black' }), true);
});

test('passes when not containing the provided seed', (t) => {
  t.is(stringExclusion('my fake description', { seed: 'fake' }), false);
});
