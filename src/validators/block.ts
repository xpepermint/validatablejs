export function block (value: any, recipe: any): boolean | Promise<boolean> {
  if (!recipe) return false;

  if (recipe.block) {
    return recipe.block.call(this, {value, recipe});
  }
  return false;
}
