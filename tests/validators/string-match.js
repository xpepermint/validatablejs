import test from 'ava';
import { stringMatch } from '../../dist/validators';

test('passes with a valid pattern', (t) => {
  t.is(stringMatch('me', { regexp: /me/i }), true);
});
