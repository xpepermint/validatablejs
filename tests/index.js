const test = require('ava');
const {validate} = require('../dist/index');

test('validate a value', async (t) => {
  let result = await validate(
    '',
    {
      presence: {
        message: 'is required'
      },
      blockValue: {
        block: async (v) => v === 'foo',
        message: 'must be `foo`'
      }
    }
  );

  t.deepEqual(result, ['is required', 'must be `foo`']);
});

test('validate with onlyFirstError=true', async (t) => {
  let result = await validate(
    '',
    {
      presence: {
        message: 'is required'
      },
      blockValue: {
        block: async (v) => v === 'foo',
        message: 'must be `foo`'
      }
    },
    {
      onlyFirstError: true
    }
  );

  t.deepEqual(result, ['is required']);
});

test('validate with custom errorFormat', async (t) => {
  let result = await validate(
    '',
    {
      presence: {
        message: 'is required'
      },
      blockValue: {
        block: async (v) => v === 'foo',
        message: 'must be `foo`'
      }
    },
    {
      onlyFirstError: true,
      errorFormat: (value, definition) => ({message: definition.message})
    }
  );

  t.deepEqual(result, [{message: 'is required'}]);
});
