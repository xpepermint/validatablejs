import test from 'ava';
import { BSONObjectID } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(BSONObjectID(true), false);
});

test('fails when invalid', (t) => {
  t.is(BSONObjectID('507f1f77bcf86cd7994390'), false);
});

test('passes when valid', (t) => {
  t.is(BSONObjectID('507f1f77bcf86cd799439011'), true);
});
