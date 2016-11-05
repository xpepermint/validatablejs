import test from 'ava';
import {Validator, ValidationError} from '../dist/index';

test('Validator.validate', async (t) => {
  let v = new Validator({
    context: {who: 'foo'}
  });
  let recipes = [
    {name: 'presence', message: 'is required'},
    {name: 'block', message: 'must be foo', async block (v) { return v === this.who}}
  ];
  let errors = await v.validate('', recipes);

  t.is(errors.length, 2);
  t.is(errors[0] instanceof ValidationError, true);
  t.is(errors[0].name, 'ValidationError');
  t.is(errors[0].message, 'is required');
  t.deepEqual(errors[0].recipe, recipes[0]);
  t.deepEqual(errors[1].recipe, recipes[1]);
  t.is(errors[0].code, 422);
});

test('Validator.validate with onlyFirstError=true', async (t) => {
  let v = new Validator({
    firstErrorOnly: true
  });
  let recipes = [
    {name: 'presence', message: 'is required'},
    {name: 'block', message: 'must be foo', async block (v) { return v === this.who}}
  ];
  let errors = await v.validate('', recipes);

  t.is(errors.length, 1);
});

test('Validator.validate with validator message as function', async (t) => {
  let v = new Validator();
  let recipes = [
    {name: 'presence', message: () => 'is required'}
  ];
  let errors = await v.validate('', recipes);

  t.deepEqual(errors[0].message, 'is required');
});
