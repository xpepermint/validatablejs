import test from 'ava';
import { stringBase64 } from '../../dist/validators';

test('fails when not a string', (t) => {
  t.is(stringBase64(true), false);
});

test('fails when invalid', (t) => {
  t.is(stringBase64('1'), false);
  t.is(stringBase64('12345'), false);
  t.is(stringBase64(''), false);
  t.is(stringBase64('Vml2YW11cyBmZXJtZtesting123'), false);
  t.is(stringBase64('Zg='), false);
  t.is(stringBase64('Z==='), false);
  t.is(stringBase64('Zm=8'), false);
  t.is(stringBase64('=m9vYg=='), false);
  t.is(stringBase64('Zm9vYmFy===='), false);
});

test('passes when valid', (t) => {
  t.is(stringBase64('Zg=='), true);
  t.is(stringBase64('Zm8='), true);
  t.is(stringBase64('Zm9v'), true);
  t.is(stringBase64('Zm9vYg=='), true);
  t.is(stringBase64('Zm9vYmE='), true);
  t.is(stringBase64('Zm9vYmFy'), true);
  t.is(stringBase64('dGVzdA=='), true);
  t.is(stringBase64('TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4='), true);
  t.is(stringBase64('Vml2YW11cyBmZXJtZW50dW0gc2VtcGVyIHBvcnRhLg=='), true);
  t.is(stringBase64('U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw=='), true);
  t.is(stringBase64('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuMPNS1Ufof9EW/M98FNwUAKrwflsqVxaxQjBQnHQmiI7Vac40t8x7pIb8gLGV6wL7sBTJiPovJ0V7y7oc0YerhKh0Rm4skP2z/jHwwZICgGzBvA0rH8xlhUiTvcwDCJ0kc+fh35hNt8srZQM4619FTgB66Xmp4EtVyhpQV+t02g6NzK72oZI0vnAvqhpkxLeLiMCyrI416wHm5TkukhxQmcL2a6hNOyu0ixX/x2kSFXApEnVrJ+/IxGyfyw8kf4N2IZpW5nEP847lpfj0SZZFwrd1mnfnDbYohX2zRptLy2ZUn06Qo9pkG5ntvFEPo9bfZeULtjYzIl6K8gJ2uGZHQIDAQAB'), true);
});
