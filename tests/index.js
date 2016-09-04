const test = require('ava');
const {validate} = require('../dist/index');

test('executs synchronous validator', (t) => {
  t.is(validate('John', {
    validator: 'presence'
  }), true);
});

test('executs asynchronous validator', async (t) => {
  t.is(await validate('foo', {
    validator: 'blockValue',
    block: async (v) => v === 'foo'
  }), true);
});
