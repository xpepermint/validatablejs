import {isNumber} from 'typeable';

export function numberSize (v: any, d: {
  min?: number, 
  minOrEqual?: number, 
  max?: number, 
  maxOrEqual?: number
} = {}) {
  let {min, minOrEqual, max, maxOrEqual} = d;

  if (!isNumber(v)) return false;

  if (isNumber(min) && !(v > min)) return false;
  if (isNumber(minOrEqual) && !(v >= minOrEqual)) return false;
  if (isNumber(max) && !(v < max)) return false;
  if (isNumber(maxOrEqual) && !(v <= maxOrEqual)) return false;
  return true;
}
