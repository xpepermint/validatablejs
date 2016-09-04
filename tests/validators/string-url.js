const test = require('ava');
const {stringURL} = require('../../dist/validators');

test('fails when not a string', (t) => {
  t.is(stringURL(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringURL('xyz://foobar.com'), false);
});

test('fails if custom protocol', (t) => {
  t.is(stringURL('rtmp://foobar.com'), false);
});

test('fails without top-level domain name', (t) => {
  t.is(stringURL('rtmp://local'), false);
});

test('fails without protocol', (t) => {
  t.is(stringURL('domain.com'), false);
});

test('passes when valid', (t) => {
  t.is(stringURL('http://domain.com'), true);
});

test('passes if custom protocol when protocols is [rtmp]', (t) => {
  t.is(stringURL('rtmp://foobar.com', {protocols: ['rtmp']}), true);
});

test('passes without top-level domain name when requireTld is false', (t) => {
  t.is(stringURL('http://foobar', {requireTld: false}), true);
});

test('passes without protocol', (t) => {
  t.is(stringURL('domain.com', {requireProtocol: false}), true);
});
