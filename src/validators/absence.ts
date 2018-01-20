import { isAbsent } from 'typeable';

export function absence (value: any): boolean {
  return isAbsent(value);
}
