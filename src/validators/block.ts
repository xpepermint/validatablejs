export interface Options {
  block?: () => boolean | Promise<boolean>;
}

export function block (value: any, options: Options = {}): boolean {
  if (!options) return false;

  let {block} = options;
  if (block) {
    return block.call(this, value, options);
  }
  return false;
}
