import { isArray, isNumber } from 'typeable';

export interface ArrayLengthOptions {
  min?: number;
  minOrEqual?: number;
  max?: number;
  maxOrEqual?: number;
}

export function arrayLength (value: any, options: ArrayLengthOptions = {}): boolean {
  if (!isArray(value)) return false;

  let size = value.length;
  let { min, minOrEqual, max, maxOrEqual } = options;
  if (isNumber(min) && !(size > min)) return false;
  if (isNumber(minOrEqual) && !(size >= minOrEqual)) return false;
  if (isNumber(max) && !(size < max)) return false;
  if (isNumber(maxOrEqual) && !(size <= maxOrEqual)) return false;
  return true;
}
