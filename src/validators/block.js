export function block (value, recipe) {
  if (!recipe) return false;

  if (recipe.block) {
    return recipe.block.call(this, {value, recipe});
  }
  return false;
}
