import { isString, isNumber } from 'typeable';

export interface StringLengthOptions {
  bytes?: boolean;
  min?: number;
  minOrEqual?: number;
  max?: number;
  maxOrEqual?: number;
}

export function stringLength (value: any, recipe: StringLengthOptions = {}): boolean {
  if (!isString(value)) return false;

  let { bytes = false, min, minOrEqual, max, maxOrEqual } = recipe;
  let len = bytes
    ? encodeURI(value).split(/%..|./).length - 1
    : value.length;

  if (isNumber(min) && !(len > min)) return false;
  if (isNumber(minOrEqual) && !(len >= minOrEqual)) return false;
  if (isNumber(max) && !(len < max)) return false;
  if (isNumber(maxOrEqual) && !(len <= maxOrEqual)) return false;
  return true;
}
