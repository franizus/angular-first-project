import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test 1.',
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/01/Butter-chicken-recipe-320x211.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple a test 2.',
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/01/Butter-chicken-recipe-320x211.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
