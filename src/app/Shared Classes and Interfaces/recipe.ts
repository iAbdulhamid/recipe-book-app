import { Ingredient } from './ingredient';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, img: string, ingreds: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = img;
    this.ingredients = ingreds;
  }

}
