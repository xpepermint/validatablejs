import {isPresent} from 'typeable';

export function presence (v: any): boolean {
  return isPresent(v);
}
