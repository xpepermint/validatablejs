import {isAbsent} from 'typeable';

export function absence (v: any): boolean {
  return isAbsent(v);
}
