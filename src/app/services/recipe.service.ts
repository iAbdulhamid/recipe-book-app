import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../Shared Classes and Interfaces/recipe';
import { Ingredient } from '../Shared Classes and Interfaces/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Recipe',
    'for A test',
    'https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg',
    [
      new Ingredient('meat', 1),
      new Ingredient('chips', 30),
    ]),
    new Recipe('B Recipe',
    'for B test',
    'https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg',
    [
      new Ingredient('meat', 1),
      new Ingredient('chips', 30),
    ]),
    new Recipe('C Recipe', 'for C test',
    'https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg',
    [
      new Ingredient('meat', 1),
      new Ingredient('chips', 30),
    ]),
  ];
  recipeSelected = new EventEmitter<Recipe>();


  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // .slice() => will return a new array of Recipes [Not the orginal one]
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
