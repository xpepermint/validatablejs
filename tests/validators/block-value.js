const test = require('ava');
const validator = require('../../dist/validators/block-value');

test('passes with a valid synchronous block', async (t) => {
  t.is(await validator('me', {block: (v) => v === 'me'}), true);
});

test('passes with a valid synchronous block', async (t) => {
  t.is(await validator('me', {block: async (v) => v === 'me'}), true);
});
