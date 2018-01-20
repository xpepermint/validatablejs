import { isPresent } from 'typeable';

export function presence (value: any): boolean {
  return isPresent(value);
}
