import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  idCount = 3;
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A test recipe',
      'This is a simple test 1',
      'https://img.taste.com.au/ITgbQUXM/w643-h428-cfill-q90/taste/2016/11/butter-chicken-with-naan-81484-1.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      2,
      'Another test recipe',
      'This is a simple test 2',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/nachos_92445_16x9.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find((recipe: Recipe) => {
      return recipe.id == id;
    });
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.idCount;
    this.idCount++;
    this.recipes.push(recipe);
    this.emitRecipess();
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    const index = this.getRecipeIndex(id);
    this.recipes[index] = newRecipe;
    this.emitRecipess();
  }

  getRecipeIndex(id: number) {
    return this.recipes.findIndex((recipe: Recipe) => {
      return recipe.id == id;
    });
  }

  deleteRecipe(id: number) {
    const index = this.getRecipeIndex(id);
    this.recipes.splice(index, 1);
    this.emitRecipess();
  }

  emitRecipess() {
    this.recipesChanged.next(this.recipes.slice());
  }
}
