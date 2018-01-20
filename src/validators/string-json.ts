import { isString } from 'typeable';

export function stringJSON (value: any): boolean {
  if (!isString(value)) return false;

  try {
    let obj = JSON.parse(value);
    return !!obj && typeof obj === 'object';
  } catch (e) {}
  return false;
};
