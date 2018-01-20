import test from 'ava';
import { block } from '../../dist/validators';

test('passes with a valid synchronous block', async (t) => {
  t.is(await block('me', { block: (value) => value === 'me' }), true);
});

test('passes with a valid synchronous block', async (t) => {
  t.is(await block('me', { block: async (value) => value === 'me' }), true);
});
