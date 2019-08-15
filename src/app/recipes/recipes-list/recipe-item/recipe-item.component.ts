import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/Shared Classes and Interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelect() {
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
