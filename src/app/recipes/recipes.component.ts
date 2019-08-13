import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Shared Classes and Interfaces/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
