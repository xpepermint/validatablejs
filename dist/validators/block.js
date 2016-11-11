"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.block = block;
function block(value, recipe) {
  if (!recipe) return false;

  if (recipe.block) {
    return recipe.block.call(this, { value: value, recipe: recipe });
  }
  return false;
}