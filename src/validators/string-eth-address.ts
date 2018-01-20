import {isString} from 'typeable';

export function stringETHAddress (value: any): boolean {
  if (!isString(value)) return false;

  return /^0x[a-fA-F0-9]{40}$/i.test(value);
}
