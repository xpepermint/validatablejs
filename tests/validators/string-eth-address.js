import test from 'ava';
import { stringETHAddress } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringETHAddress(true), false);
});

test('fails on invalid address', (t) => {
  t.is(stringETHAddress('domain'), false);
  t.is(stringETHAddress('0x0'), false);
});

test('passes on valid address', (t) => {
  t.is(stringETHAddress('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed'), true);
  t.is(stringETHAddress('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'), true);
  t.is(stringETHAddress('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB'), true);
  t.is(stringETHAddress('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb'), true);
});
