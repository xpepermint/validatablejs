import {isNumber} from 'typeable';

export function numberSize (value: any, {
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

  if (!isNumber(value)) return false;

  if (isNumber(min) && !(value > min)) return false;
  if (isNumber(minOrEqual) && !(value >= minOrEqual)) return false;
  if (isNumber(max) && !(value < max)) return false;
  if (isNumber(maxOrEqual) && !(value <= maxOrEqual)) return false;
  return true;
}
