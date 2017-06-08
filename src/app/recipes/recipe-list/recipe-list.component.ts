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
    new Recipe( 'A Test Recipe',
                'This is simply a test',
                'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg' ),
  new Recipe( 'A Test Recipe2',
              'This is simply a test2',
              'http://www.housing.ucsb.edu/sites/www.housing.ucsb.edu/files/styles/feature_image/public/images/page_slideshows/dining/changing%20meal%20plans.jpg' )
  ]; //sa :Recipe[] kazemo da ce recipes type biti polje klase Recipe

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
