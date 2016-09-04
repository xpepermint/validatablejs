const test = require('ava');
const validator = require('../../dist/validators/string-email');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('john'), false);
});

test('fails when display name', (t) => {
  t.is(validator('John <john@domain.com>'), false);
});

test('fails with UTF8 characters', (t) => {
  t.is(validator('šžćč@domain.com'), false);
});

test('fails without top-level domain name', (t) => {
  t.is(validator('john@domain'), false);
});

test('fails without top-level domain name', (t) => {
  t.is(validator('john@domain', {requireTld: false}), true);
});

test('passes with display name when allowDisplayName is true', (t) => {
  t.is(validator('John <john@domain.com>', {allowDisplayName: true}), true);
});

test('passes with UTF8 characters when allowUtf8LocalPart is true', (t) => {
  t.is(validator('đšpŽĆČ@domain.com', {allowUtf8LocalPart: true}), true);
});
