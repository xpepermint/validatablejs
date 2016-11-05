import test from 'ava';
import {block} from '../../dist/validators';

test('passes with a valid synchronous block', async (t) => {
  t.is(await block('me', {block: (v) => v === 'me'}), true);
});

test('passes with a valid synchronous block', async (t) => {
  t.is(await block('me', {block: async (v) => v === 'me'}), true);
});
