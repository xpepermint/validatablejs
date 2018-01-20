import { isNumber } from 'typeable';

export interface NumberSizeOptions {
  min?: number;
  minOrEqual?: number;
  max?: number;
  maxOrEqual?: number;
}

export function numberSize (value: any, options: NumberSizeOptions = {}): boolean {
  if (!isNumber(value)) return false;

  let {min, minOrEqual, max, maxOrEqual} = options;
  if (isNumber(min) && !(value > min)) return false;
  if (isNumber(minOrEqual) && !(value >= minOrEqual)) return false;
  if (isNumber(max) && !(value < max)) return false;
  if (isNumber(maxOrEqual) && !(value <= maxOrEqual)) return false;
  return true;
}
