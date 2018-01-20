import test from 'ava';
import { stringInclusion } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringInclusion(true, { seed: 'true' }), false);
});

test('fails when not containing the provided seed', (t) => {
  t.is(stringInclusion('my fake2 description', { seed: 'black' }), false);
});

test('passes when containing the provided seed', (t) => {
  t.is(stringInclusion('my fake description', { seed: 'fake' }), true);
});
