import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared Classes and Interfaces/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Appels', 5),
    new Ingredient('Tomatos', 10),

  ];
  constructor() { }

  ngOnInit() {
  }

}
