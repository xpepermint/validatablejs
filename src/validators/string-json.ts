import {
  isString
} from 'typeable';

/**
* Validates the size of a number.
*/

export function stringJSON (v) {
  if (!isString(v)) {
    return false;
  }
  
  try {
    let obj = JSON.parse(v);
    return !!obj && typeof obj === 'object';
  } 
  catch (e) {}
  return false;
};
