import {Recipe} from "../recipes/recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Banana bread',
  //     'An easy Banana Bread recipe with toasted hazelnuts.',
  //     'https://media.istockphoto.com/photos/homemade-banana-bread-picture-id893715546?k=20&m=893715546&s=612x612&w=0&h=tstmuA47POCRh1aLzv76IiylDF6p5OvRTc9AppjqCMI=',
  //     [
  //       new Ingredient('Banana', 3),
  //       new Ingredient('Flour', 300)
  //     ]),
  //   new Recipe('Lemon Bars',
  //     'Lemon Bars with a shortbread crust and lemon filling.',
  //     'https://thumbs.dreamstime.com/b/homemade-lemon-bars-shortbread-crust-wooden-background-165669611.jpg',
  //     [
  //       new Ingredient('Lemon', 4),
  //       new Ingredient('Egg', 5)
  //     ]),
  //   new Recipe('Strawberry Cheesecake',
  //     'A fresh twist on a classic Strawberry Cheesecake.',
  //     'https://i.redd.it/0w1mbi41utv41.png',
  //     [
  //       new Ingredient('Strawberry', 20),
  //       new Ingredient('Cream Cheese', 200)
  //     ])
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
