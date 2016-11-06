import test from 'ava';
import {
  Validator,
  ValidatorError
} from '../dist/index';

test('Validator.validate should return a list of ValidatorError instances', async (t) => {
  let v = new Validator({
    context: {who: 'foo'}
  });
  let recipes = [
    {validator: 'presence', message: 'is required'},
    {validator: 'block', message: 'must be foo', async block (v) { return v === this.who}}
  ];
  let errors = await v.validate('', recipes);

  t.is(errors.length, 2);
  t.is(errors[0] instanceof ValidatorError, true);
  t.is(errors[0].name, 'ValidatorError');
  t.is(errors[0].validator, 'presence');
  t.is(errors[0].message, 'is required');
  t.is(errors[0].code, 422);
});

test('Validator.validate with onlyFirstError=true should return only one error', async (t) => {
  let v = new Validator({
    firstErrorOnly: true
  });
  let recipes = [
    {validator: 'presence', message: 'is required'},
    {validator: 'block', message: 'must be foo', async block (v) { return v === this.who}}
  ];
  let errors = await v.validate('', recipes);

  t.is(errors.length, 1);
});

test('ValidatorError should not expose properties', async (t) => {
  let e = new ValidatorError();
  t.deepEqual(Object.keys(e), []);
});

test('ValidatorError.toObject should return error data', async (t) => {
  let e = new ValidatorError('foo', 'bar');
  t.deepEqual(e.toObject(), {
    name: 'ValidatorError',
    message: 'bar',
    validator: 'foo',
    code: 422
  });
});

test('recipe message can be a function', async (t) => {
  let v = new Validator();
  let recipes = [
    {validator: 'presence', message: () => 'is required'}
  ];
  let errors = await v.validate('', recipes);

  t.deepEqual(errors[0].message, 'is required');
});

test('recipe message variables %{...} should be replaced with related recipe variables', async (t) => {
  let v = new Validator();
  let recipes = [
    {validator: 'presence', message: () => '%{foo} is required', foo: 'bar'}
  ];
  let errors = await v.validate('', recipes);

  t.deepEqual(errors[0].message, 'bar is required');
});
