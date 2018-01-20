import { toString } from 'typeable';
import { stringHexadecimal } from './string-hexadecimal';

export function BSONObjectID (value: any): boolean {
  value = toString(value);

  return (
    stringHexadecimal(value)
    && value.length === 24
  );
}
