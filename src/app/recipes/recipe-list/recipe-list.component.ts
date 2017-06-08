import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe( 'Chicken',
                'This is simply a test',
                'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg' ),
  new Recipe( 'Hamburger',
              'This is simply a test2',
              'http://ffmag.com/wp-content/uploads/2016/03/Burger_WEB.jpg' )
  ]; //sa :Recipe[] kazemo da ce recipes type biti polje klase Recipe

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
