const test = require('ava');
const {blockValue} = require('../../dist/validators');

test('passes with a valid synchronous block', async (t) => {
  t.is(await blockValue('me', {block: (v) => v === 'me'}), true);
});

test('passes with a valid synchronous block', async (t) => {
  t.is(await blockValue('me', {block: async (v) => v === 'me'}), true);
});
