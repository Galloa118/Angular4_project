import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( 'Chicken',
                'This is simply a test',
                'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
                [
                    new Ingredient('Meat', 1),
                    new Ingredient('French Fries', 20)
                ]),
  new Recipe( 'Hamburger',
              'This is simply a test2',
              'http://ffmag.com/wp-content/uploads/2016/03/Burger_WEB.jpg',
              [
                  new Ingredient('Buns', 2),
                  new Ingredient('Meat', 1)
              ])
  ]; //sa :Recipe[] kazemo da ce recipes type biti polje klase Recipe

  constructor (private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice(); //sa slice vracamo kopiju, a ne original recipes
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
