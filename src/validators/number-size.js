import {isNumber} from 'typeable';

export function numberSize (value, {min, minOrEqual, max, maxOrEqual} = {}) {
  if (!isNumber(value)) return false;

  if (isNumber(min) && !(value > min)) return false;
  if (isNumber(minOrEqual) && !(value >= minOrEqual)) return false;
  if (isNumber(max) && !(value < max)) return false;
  if (isNumber(maxOrEqual) && !(value <= maxOrEqual)) return false;
  return true;
}
