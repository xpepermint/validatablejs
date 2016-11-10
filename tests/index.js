import test from 'ava';
import {Validator} from '../dist/index';

test('Validator.validate should return a list of errors', async (t) => {
  let v = new Validator({
    context: {who: 'foo'}
  });
  let recipes = [
    {validator: 'presence', message: 'is required'},
    {validator: 'block', message: 'must be foo', async block (v) { return v === this.who}}
  ];
  let errors = await v.validate('', recipes);

  t.is(errors.length, 2);
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
