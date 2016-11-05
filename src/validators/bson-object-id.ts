import {toString} from 'typeable';
import {stringHexadecimal} from './string-hexadecimal';

export function BSONObjectID (v: any) {
  v = toString(v);

  return (
    stringHexadecimal(v)
    && v.length === 24
  );
}
