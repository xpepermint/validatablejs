const test = require('ava');
const {Validator} = require('../dist/index');

test('Validator.validate', async (t) => {
  let v = new Validator();
  let result = await v.validate(
    '',
    {
      presence: {
        message: 'is required'
      },
      blockValue: {
        block: async (v) => v === 'foo',
        message: 'must be foo'
      }
    }
  );

  t.deepEqual(result, ['is required','must be foo']);
});

test('Validator.validate with onlyFirstError=true', async (t) => {
  let v = new Validator({
    firstErrorOnly: true
  });
  let result = await v.validate(
    '',
    {
      presence: {
        message: 'is required'
      },
      blockValue: {
        block: async (v) => v === 'foo',
        message: 'must be foo'
      }
    }
  );

  t.deepEqual(result, ['is required']);
});

test('Validator.validate with custom errorBuilder', async (t) => {
  let v = new Validator({
    errorBuilder: (name, value, {message}) => ({message})
  });
  let result = await v.validate(
    '',
    {
      presence: {
        message: 'is required'
      },
      blockValue: {
        block: async (v) => v === 'foo',
        message: 'must be foo'
      }
    }
  );

  t.deepEqual(result, [{message: 'is required'}, {message: 'must be foo'}]);
});

test('Validator.validate with validator message as function', async (t) => {
  let v = new Validator();
  let result = await v.validate(
    '',
    {
      presence: {
        message: (v, d) => 'is required'
      }
    }
  );

  t.deepEqual(result, ['is required']);
});
