import {isString} from 'typeable';

const BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;

export function stringBase64 (v: any) {
  if (!isString(v)) return false;

  return BASE64_REGEX.test(v);
}
