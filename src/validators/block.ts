import {Validation} from '..';
import {isPromise} from 'typeable';

export function block (
  v: any, 
  d: {
    block (v: any, d: any): boolean | Promise<boolean>,
    [key: string]: any
  }
): Function | Promise<boolean> {
  let {block} = d;

  if (isPromise(block)) {
    return Promise.resolve(v).then(block.bind(this));
  }
  else {
    return block.call(this, v, d);
  }
}
