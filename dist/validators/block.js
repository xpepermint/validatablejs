"use strict";
function block(value, recipe) {
    if (!recipe)
        return false;
    if (recipe.block) {
        return recipe.block.call(this, { value: value, recipe: recipe });
    }
    return false;
}
exports.block = block;
