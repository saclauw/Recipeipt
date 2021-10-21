import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta', 'Pasta is good!', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?quality=90&resize=768,574'),
    new Recipe('Skirt Steak', 'Steak with chimichurri', 'https://www.pccmarkets.com/wp-content/uploads/2017/09/pcc-skirt-steak-chimchurri-sauce-flo.jpg'),
    new Recipe('Something for dinner', 'Something tasty and easy to make that will leave me satisfied for two days', 'https://www.budgetbytes.com/wp-content/uploads/2018/01/Sheet-Pan-BBQ-Meatloaf-Dinner-plate.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
