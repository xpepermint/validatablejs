import {
  isArray,
  isNumber
} from 'typeable';

export function arrayLength (value: any, {
  min,
  minOrEqual,
  max,
  maxOrEqual
}: {
  min?: number,
  minOrEqual?: number,
  max?: number,
  maxOrEqual?: number
} = {}) {

  if (!isArray(value)) return false;

  let size = value.length;
  if (isNumber(min) && !(size > min)) return false;
  if (isNumber(minOrEqual) && !(size >= minOrEqual)) return false;
  if (isNumber(max) && !(size < max)) return false;
  if (isNumber(maxOrEqual) && !(size <= maxOrEqual)) return false;
  return true;
}
