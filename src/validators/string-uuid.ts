import {isString} from 'typeable';

const V1_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const V2_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const V3_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const V5_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function stringUUID (v, d: {version?: number} = {}) {
  if (!isString(v)) return false;

  switch (d.version) {
    case 1:
      return V1_REGEX.test(v);
    case 2:
      return V2_REGEX.test(v);
    case 3:
      return V3_REGEX.test(v);
    case 4:
      return V4_REGEX.test(v);
    case 5:
      return V5_REGEX.test(v);
  }

  return (
    V1_REGEX.test(v)
    || V2_REGEX.test(v)
    || V3_REGEX.test(v)
    || V4_REGEX.test(v)
    || V5_REGEX.test(v)
  );
};
