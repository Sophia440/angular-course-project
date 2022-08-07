import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Banana bread',
      'An easy Banana Bread recipe with toasted hazelnuts.',
      'https://media.istockphoto.com/photos/homemade-banana-bread-picture-id893715546?k=20&m=893715546&s=612x612&w=0&h=tstmuA47POCRh1aLzv76IiylDF6p5OvRTc9AppjqCMI='),
    new Recipe('Lemon Bars',
      'Lemon Bars with a shortbread crust and lemon filling.',
      'https://thumbs.dreamstime.com/b/homemade-lemon-bars-shortbread-crust-wooden-background-165669611.jpg'),
    new Recipe('Strawberry Cheesecake',
      'A fresh twist on a classic Strawberry Cheesecake.',
      'https://i.redd.it/0w1mbi41utv41.png')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
