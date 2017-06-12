import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe( 'Chicken',
                'This is simply a test',
                'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg' ),
  new Recipe( 'Hamburger',
              'This is simply a test2',
              'http://ffmag.com/wp-content/uploads/2016/03/Burger_WEB.jpg' )
  ]; //sa :Recipe[] kazemo da ce recipes type biti polje klase Recipe


  getRecipes(){
    return this.recipes.slice(); //sa slice vracamo kopiju, a ne original recipes
  }

}
