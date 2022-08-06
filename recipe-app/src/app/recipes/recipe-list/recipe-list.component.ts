import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Banana bread',
      'An easy Banana Bread Recipe with toasted hazelnuts.',
      'https://media.istockphoto.com/photos/homemade-banana-bread-picture-id893715546?k=20&m=893715546&s=612x612&w=0&h=tstmuA47POCRh1aLzv76IiylDF6p5OvRTc9AppjqCMI=')
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
