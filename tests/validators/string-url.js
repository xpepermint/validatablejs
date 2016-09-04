const test = require('ava');
const validator = require('../../dist/validators/string-url');

test('fails when not a string', (t) => {
  t.is(validator(true), false);
});

test('fails when invalid', (t) => {
  t.is(validator('xyz://foobar.com'), false);
});

test('fails if custom protocol', (t) => {
  t.is(validator('rtmp://foobar.com'), false);
});

test('fails without top-level domain name', (t) => {
  t.is(validator('rtmp://local'), false);
});

test('fails without protocol', (t) => {
  t.is(validator('domain.com'), false);
});

test('passes when valid', (t) => {
  t.is(validator('http://domain.com'), true);
});

test('passes if custom protocol when protocols is [rtmp]', (t) => {
  t.is(validator('rtmp://foobar.com', {protocols: ['rtmp']}), true);
});

test('passes without top-level domain name when requireTld is false', (t) => {
  t.is(validator('http://foobar', {requireTld: false}), true);
});

test('passes without protocol', (t) => {
  t.is(validator('domain.com', {requireProtocol: false}), true);
});
