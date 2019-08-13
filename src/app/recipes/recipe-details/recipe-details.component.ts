import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/Shared Classes and Interfaces/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
