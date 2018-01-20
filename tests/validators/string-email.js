import test from 'ava';
import { stringEmail } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringEmail(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringEmail('john'), false);
});

test('fails when display name', (t) => {
  t.is(stringEmail('John <john@domain.com>'), false);
});

test('fails with UTF8 characters', (t) => {
  t.is(stringEmail('šžćč@domain.com'), false);
});

test('fails without top-level domain name', (t) => {
  t.is(stringEmail('john@domain'), false);
});

test('fails without top-level domain name', (t) => {
  t.is(stringEmail('john@domain', { requireTld: false }), true);
  t.is(stringEmail('john@domain', { requireTld: true }), false);
});

test('passes with display name when allowDisplayName is true', (t) => {
  t.is(stringEmail('John <john@domain.com>', { allowDisplayName: true }), true);
  t.is(stringEmail('John <john@domain.com>', { allowDisplayName: false }), false);
});

test('passes with UTF8 characters when allowUtf8LocalPart is true', (t) => {
  t.is(stringEmail('đšpŽĆČ@domain.com', { allowUtf8LocalPart: true }), true);
  t.is(stringEmail('đšpŽĆČ@domain.com', { allowUtf8LocalPart: false }), false);
});
