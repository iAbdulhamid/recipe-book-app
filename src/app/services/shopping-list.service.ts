import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared Classes and Interfaces/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Appels', 5),
    new Ingredient('Tomatos', 10),
    new Ingredient('Bananas', 7)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingred: Ingredient) {
    this.ingredients.push(ingred);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingreds: Ingredient[]) {
    // for (let ing of ingreds) {
    //   this.addIngredient(ing);
    // }
    this.ingredients.push(...ingreds);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
